"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

interface Skill {
  id: number;
  name: string;
  description: string;
  category: string;
  repository: string;
  repoName: string;
  fileSize: string;
}

export default function Home() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data: Skill[]) => {
        setSkills(data);
        setFilteredSkills(data);
        
        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(data.map((skill) => skill.category))
        ).sort();
        setCategories(["All", ...uniqueCategories]);
      });
  }, []);

  useEffect(() => {
    let filtered = skills;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((skill) => skill.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredSkills(filtered);
  }, [selectedCategory, searchQuery, skills]);

  return (
    <div className={styles.container}>
      {/* Background gradient orbs */}
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>
            Patrick <span className={styles.accent}>Diamitani</span>
          </h1>
          <p className={styles.tagline}>
            Professional AI Agent Skills Marketplace
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>
            <span className={styles.accent}>Production-Grade</span>
            <br />
            AI Agent Skills
          </h2>
          <p className={styles.heroSubtitle}>
            {skills.length} professional skills for development, automation,
            design, and business operations. Built with ROSTR framework.
          </p>
        </div>
      </section>

      {/* Controls */}
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        <div className={styles.categories}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${styles.categoryBtn} ${
                selectedCategory === category ? styles.categoryBtnActive : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className={styles.statsBar}>
        <div className={styles.stat}>
          <div className={styles.statValue}>{filteredSkills.length}</div>
          <div className={styles.statLabel}>Skills</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>{categories.length - 1}</div>
          <div className={styles.statLabel}>Categories</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>100%</div>
          <div className={styles.statLabel}>Open Source</div>
        </div>
      </div>

      {/* Skills Grid */}
      <main className={styles.main}>
        <div className={styles.grid}>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className={styles.card}
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`,
              }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.categoryBadge}>{skill.category}</span>
              </div>
              <h3 className={styles.cardTitle}>{skill.name}</h3>
              <p className={styles.cardDescription}>
                {skill.description.length > 200
                  ? skill.description.substring(0, 200) + "..."
                  : skill.description}
              </p>
              <div className={styles.cardFooter}>
                <a
                  href={skill.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardButton}
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className={styles.empty}>
            <p>No skills found matching your criteria.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Patrick Diamitani</h4>
            <p>AI Systems Architect & Developer</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Connect</h4>
            <a href="mailto:patrick.diamitani@gmail.com">Email</a>
            <a
              href="https://linkedin.com/in/Diamitani"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/diamitani"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className={styles.footerSection}>
            <h4>Frameworks</h4>
            <p>Built with ROSTR</p>
            <p>PAL • RAG DAL • NPAO</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2026 Patrick Diamitani. All skills are MIT licensed.</p>
        </div>
      </footer>
    </div>
  );
}
