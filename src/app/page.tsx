"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
        
        const uniqueCategories = Array.from(
          new Set(data.map((skill) => skill.category))
        ).sort();
        setCategories(["All", ...uniqueCategories]);
      });
  }, []);

  useEffect(() => {
    let filtered = skills;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((skill) => skill.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredSkills(filtered);
  }, [selectedCategory, searchQuery, skills]);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "AI/Agent Framework": "#2563EB",
      "Design & Visualization": "#7C3AED",
      "Sales & Marketing": "#10B981",
      "Project Management": "#F59E0B",
      "Templates & Documentation": "#EF4444",
      "Music Industry": "#EC4899",
      "Automation & Workflows": "#14B8A6",
      "Other": "#6B7280"
    };
    return colors[category] || "#6B7280";
  };

  return (
    <div className={styles.page}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navBrand}>
            <span className={styles.brandText}>Patrick</span>
            <span className={styles.brandAccent}>Diamitani</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#features" className={styles.navLink}>Features</a>
            <a href="#skills" className={styles.navLink}>Skills</a>
            <a href="#about" className={styles.navLink}>About</a>
            <a 
              href="https://github.com/diamitani" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.navButton}
            >
              View GitHub →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroLeft}>
            <div className={styles.heroTag}>
              <span className={styles.heroTagDot}>●</span>
              61 Production Skills Available
            </div>
            <h1 className={styles.heroTitle}>
              AI Agent Skills for
              <br />
              <span className={styles.heroTitleAccent}>Modern Development</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Production-grade AI agent skills built with the ROSTR framework. From GTM automation
              to full-stack development, deploy battle-tested workflows that compound knowledge
              over time.
            </p>
            <div className={styles.heroCTA}>
              <a href="#skills" className={styles.ctaPrimary}>
                Browse Skills
              </a>
              <a 
                href="#about" 
                className={styles.ctaSecondary}
              >
                Learn More
              </a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>61</div>
                <div className={styles.statLabel}>Skills</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>7</div>
                <div className={styles.statLabel}>Categories</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Open Source</div>
              </div>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroVisual}>
              <div className={styles.visualCard} style={{ animationDelay: '0s' }}>
                <div className={styles.visualIcon}>🤖</div>
                <div className={styles.visualTitle}>ROSTR Framework</div>
                <div className={styles.visualText}>PAL · RAG DAL · NPAO</div>
              </div>
              <div className={styles.visualCard} style={{ animationDelay: '0.1s' }}>
                <div className={styles.visualIcon}>⚡</div>
                <div className={styles.visualTitle}>Production Ready</div>
                <div className={styles.visualText}>Battle-tested workflows</div>
              </div>
              <div className={styles.visualCard} style={{ animationDelay: '0.2s' }}>
                <div className={styles.visualIcon}>🔧</div>
                <div className={styles.visualTitle}>Plug & Play</div>
                <div className={styles.visualText}>Zero dependencies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresHeader}>
            <h2 className={styles.featuresTitle}>Built on ROSTR Framework</h2>
            <p className={styles.featuresSubtitle}>
              Production-grade multi-agent systems with persistent knowledge compounding
            </p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📋</div>
              <h3 className={styles.featureTitle}>PAL Compiler</h3>
              <p className={styles.featureDescription}>
                Prompt Abstraction Layer transforms intent into precise agent specifications with 5-stage compilation
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔍</div>
              <h3 className={styles.featureTitle}>RAG DAL</h3>
              <p className={styles.featureDescription}>
                Multi-pass retrieval with tiered source credibility and coverage validation for reliable knowledge
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3 className={styles.featureTitle}>NPAO Orchestration</h3>
              <p className={styles.featureDescription}>
                Navigate, Prioritize, Allocate, Orchestrate with 5D phase taxonomy and multi-dimensional scoring
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💾</div>
              <h3 className={styles.featureTitle}>Persistent State</h3>
              <p className={styles.featureDescription}>
                ROSTR Hub stores decisions, learnings, and context across sessions for compounding knowledge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.skillsSection}>
        <div className={styles.skillsContainer}>
          <div className={styles.skillsHeader}>
            <h2 className={styles.skillsTitle}>Explore Skills</h2>
            <p className={styles.skillsSubtitle}>
              {filteredSkills.length} professional skills across {categories.length - 1} categories
            </p>
          </div>

          {/* Search and Filter */}
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

          {/* Skills Grid */}
          <div className={styles.skillsGrid}>
            {filteredSkills.map((skill, index) => (
              <Link
                key={skill.id}
                href={`/skills/${skill.id}`}
                className={styles.skillCard}
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`,
                }}
              >
                <div className={styles.skillCardHeader}>
                  <span 
                    className={styles.categoryBadge}
                    style={{ 
                      backgroundColor: `${getCategoryColor(skill.category)}15`,
                      color: getCategoryColor(skill.category),
                      borderColor: getCategoryColor(skill.category)
                    }}
                  >
                    {skill.category}
                  </span>
                </div>
                <h3 className={styles.skillCardTitle}>{skill.name}</h3>
                <p className={styles.skillCardDescription}>
                  {skill.description.length > 120
                    ? skill.description.substring(0, 120) + "..."
                    : skill.description}
                </p>
                <div className={styles.skillCardFooter}>
                  <span className={styles.skillCardLink}>
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className={styles.empty}>
              <p>No skills found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>About the Skills Marketplace</h2>
            <div className={styles.aboutText}>
              <p>
                This marketplace showcases 61 production-grade AI agent skills built with the 
                <strong> ROSTR framework</strong> (Runtime, Orchestration, State, Tools, Reference) — 
                a unified architecture for multi-agent systems with phase-aware orchestration and 
                persistent knowledge compounding.
              </p>
              <p>
                Each skill is battle-tested, open source, and designed to integrate seamlessly with 
                modern development workflows. From GTM engineering to full-stack automation, these 
                skills represent years of refinement in production environments.
              </p>
              <h3>Key Principles</h3>
              <ul>
                <li><strong>PAL (Prompt Abstraction Layer):</strong> 5-stage intent compilation from raw prompts to executable specifications</li>
                <li><strong>RAG DAL:</strong> Multi-pass retrieval with tiered source credibility (Academic → Editorial → Community)</li>
                <li><strong>NPAO:</strong> 5D phase taxonomy (PreD → Design → Development → Deployment → Debugging)</li>
                <li><strong>Persistent State:</strong> Knowledge compounds across sessions via ROSTR Hub</li>
              </ul>
              <h3>Use Cases</h3>
              <ul>
                <li><strong>GTM Engineering:</strong> Revenue automation, Clay/HubSpot integration, outreach workflows</li>
                <li><strong>Development:</strong> Code generation, architecture planning, deployment automation</li>
                <li><strong>Design:</strong> Visual systems, diagram generation, brand frameworks</li>
                <li><strong>Operations:</strong> Project management, documentation, workflow orchestration</li>
              </ul>
            </div>
            <div className={styles.aboutCTA}>
              <a 
                href="https://github.com/diamitani" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.aboutButton}
              >
                View on GitHub
              </a>
              <a 
                href="mailto:patrick.diamitani@gmail.com"
                className={styles.aboutButtonSecondary}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Patrick Diamitani</h4>
              <p className={styles.footerText}>
                AI Systems Architect building production-grade agent frameworks and GTM automation infrastructure.
              </p>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Skills</h4>
              <a href="#skills" className={styles.footerLink}>Browse All</a>
              <a href="#features" className={styles.footerLink}>Framework</a>
              <a href="#about" className={styles.footerLink}>About</a>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Connect</h4>
              <a href="mailto:patrick.diamitani@gmail.com" className={styles.footerLink}>Email</a>
              <a href="https://linkedin.com/in/Diamitani" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
              <a href="https://github.com/diamitani" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>GitHub</a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2026 Patrick Diamitani. All skills are MIT licensed.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
