"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
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

export default function SkillDetailClient() {
  const params = useParams();
  const [skill, setSkill] = useState<Skill | null>(null);
  const [relatedSkills, setRelatedSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data: Skill[]) => {
        const currentSkill = data.find((s) => s.id === Number(params.id));
        
        if (currentSkill) {
          setSkill(currentSkill);
          
          // Find related skills in same category
          const related = data
            .filter((s) => s.category === currentSkill.category && s.id !== currentSkill.id)
            .slice(0, 3);
          setRelatedSkills(related);
        }
        
        setLoading(false);
      });
  }, [params.id]);

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

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading skill details...</p>
      </div>
    );
  }

  if (!skill) {
    return (
      <div className={styles.notFound}>
        <h1>Skill Not Found</h1>
        <p>The skill you're looking for doesn't exist.</p>
        <Link href="/" className={styles.backButton}>
          ← Back to Marketplace
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.navBrand}>
            <span className={styles.brandText}>Patrick</span>
            <span className={styles.brandAccent}>Diamitani</span>
          </Link>
          <Link href="/" className={styles.backLink}>
            ← Back to Skills
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/#skills">Skills</Link>
            <span>/</span>
            <span>{skill.name}</span>
          </div>
          
          <div
            className={styles.categoryBadge}
            style={{
              backgroundColor: `${getCategoryColor(skill.category)}15`,
              color: getCategoryColor(skill.category),
              borderColor: getCategoryColor(skill.category),
            }}
          >
            {skill.category}
          </div>

          <h1 className={styles.title}>{skill.name}</h1>
          
          <p className={styles.description}>{skill.description}</p>

          <div className={styles.actions}>
            <a
              href={skill.repository}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              View on GitHub →
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(skill.repository);
                alert("Repository URL copied to clipboard!");
              }}
              className={styles.secondaryButton}
            >
              Copy URL
            </button>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Repository</span>
              <span className={styles.metaValue}>{skill.repoName}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Size</span>
              <span className={styles.metaValue}>
                {(parseInt(skill.fileSize) / 1024).toFixed(1)} KB
              </span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Category</span>
              <span className={styles.metaValue}>{skill.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className={styles.content}>
        <div className={styles.contentContainer}>
          <div className={styles.mainContent}>
            {/* Overview */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Overview</h2>
              <div className={styles.sectionContent}>
                <p>
                  This skill is part of the <strong>Patrick Diamitani AI Skills Marketplace</strong>,
                  a collection of 61 production-grade AI agent skills built with the ROSTR framework.
                </p>
                <p>
                  Each skill is designed for seamless integration into modern development workflows,
                  with persistent state management, multi-pass knowledge retrieval, and phase-aware
                  orchestration built in.
                </p>
              </div>
            </div>

            {/* Features based on category */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <div className={styles.sectionContent}>
                <ul className={styles.featureList}>
                  {skill.category.includes("AI/Agent") && (
                    <>
                      <li>Built on ROSTR framework architecture</li>
                      <li>PAL (Prompt Abstraction Layer) compilation</li>
                      <li>Multi-agent orchestration support</li>
                      <li>Persistent knowledge compounding</li>
                    </>
                  )}
                  {skill.category.includes("Design") && (
                    <>
                      <li>Visual system generation</li>
                      <li>Diagram and asset creation</li>
                      <li>Brand framework integration</li>
                      <li>Export-ready outputs</li>
                    </>
                  )}
                  {skill.category.includes("Sales") && (
                    <>
                      <li>GTM automation workflows</li>
                      <li>CRM integration ready</li>
                      <li>Revenue pipeline optimization</li>
                      <li>Outreach sequence automation</li>
                    </>
                  )}
                  {skill.category.includes("Project") && (
                    <>
                      <li>Project planning and scoping</li>
                      <li>Task orchestration</li>
                      <li>Timeline management</li>
                      <li>Deliverable tracking</li>
                    </>
                  )}
                  {skill.category.includes("Templates") && (
                    <>
                      <li>Production-ready templates</li>
                      <li>Documentation generation</li>
                      <li>Standardized formats</li>
                      <li>Customization support</li>
                    </>
                  )}
                  <li>Zero external dependencies</li>
                  <li>Open source (MIT License)</li>
                  <li>Battle-tested in production</li>
                  <li>Comprehensive documentation</li>
                </ul>
              </div>
            </div>

            {/* Technical Details */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Technical Details</h2>
              <div className={styles.sectionContent}>
                <div className={styles.techGrid}>
                  <div className={styles.techCard}>
                    <div className={styles.techIcon}>🏗️</div>
                    <h3>Framework</h3>
                    <p>ROSTR (Runtime, Orchestration, State, Tools, Reference)</p>
                  </div>
                  <div className={styles.techCard}>
                    <div className={styles.techIcon}>📦</div>
                    <h3>Format</h3>
                    <p>Markdown-based skill specification with YAML frontmatter</p>
                  </div>
                  <div className={styles.techCard}>
                    <div className={styles.techIcon}>🔧</div>
                    <h3>Integration</h3>
                    <p>Plug-and-play via skill loader system</p>
                  </div>
                  <div className={styles.techCard}>
                    <div className={styles.techIcon}>💾</div>
                    <h3>State</h3>
                    <p>Persistent context via ROSTR Hub</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Getting Started</h2>
              <div className={styles.sectionContent}>
                <div className={styles.codeBlock}>
                  <code>
                    # Clone the repository
                    <br />
                    git clone {skill.repository}
                    <br />
                    <br />
                    # Navigate to skill directory
                    <br />
                    cd {skill.repoName}
                    <br />
                    <br />
                    # Read the SKILL.md for usage instructions
                    <br />
                    cat SKILL.md
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Quick Links</h3>
              <div className={styles.sidebarLinks}>
                <a
                  href={skill.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sidebarLink}
                >
                  <span>📂</span>
                  View Repository
                </a>
                <a
                  href={`${skill.repository}/blob/main/SKILL.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sidebarLink}
                >
                  <span>📖</span>
                  Read Documentation
                </a>
                <a
                  href={`${skill.repository}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sidebarLink}
                >
                  <span>🐛</span>
                  Report Issue
                </a>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>License</h3>
              <p className={styles.sidebarText}>
                This skill is open source and available under the MIT License.
                Free to use in personal and commercial projects.
              </p>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Support</h3>
              <p className={styles.sidebarText}>
                Questions or need help? Open an issue on GitHub or reach out via email.
              </p>
              <a
                href="mailto:patrick.diamitani@gmail.com"
                className={styles.sidebarButton}
              >
                Get Support
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Skills */}
      {relatedSkills.length > 0 && (
        <section className={styles.related}>
          <div className={styles.relatedContainer}>
            <h2 className={styles.relatedTitle}>Related Skills</h2>
            <div className={styles.relatedGrid}>
              {relatedSkills.map((relatedSkill) => (
                <Link
                  key={relatedSkill.id}
                  href={`/skills/${relatedSkill.id}`}
                  className={styles.relatedCard}
                >
                  <div
                    className={styles.relatedBadge}
                    style={{
                      backgroundColor: `${getCategoryColor(relatedSkill.category)}15`,
                      color: getCategoryColor(relatedSkill.category),
                    }}
                  >
                    {relatedSkill.category}
                  </div>
                  <h3 className={styles.relatedCardTitle}>{relatedSkill.name}</h3>
                  <p className={styles.relatedCardDescription}>
                    {relatedSkill.description.substring(0, 100)}...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p>© 2026 Patrick Diamitani. All skills are MIT licensed.</p>
          <div className={styles.footerLinks}>
            <a href="mailto:patrick.diamitani@gmail.com">Email</a>
            <a href="https://linkedin.com/in/Diamitani" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/diamitani" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
