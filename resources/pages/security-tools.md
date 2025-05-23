---
layout: default
title: Security Analysis Tools
---

# Security Analysis Tools

<div class="resource-header">
  <div class="resource-icon">
    <i class="fas fa-tools"></i>
  </div>
  <div class="resource-title">
    <h1>Security Analysis Tools</h1>
    <p>Resources for security testing, analysis, and penetration testing</p>
  </div>
</div>

<div class="resource-content">
  <div class="resource-section">
    <h2><i class="fas fa-shield-alt"></i> Vulnerability Scanners</h2>
    <div class="resource-cards">
      <div class="resource-card placeholder-card">
        <div class="card-header">
          <i class="fas fa-search"></i>
          <h3>Vulnerability Assessment Tools</h3>
        </div>
        <div class="card-content">
          <p>This section will contain resources for vulnerability scanning and assessment tools</p>
          <div class="placeholder-message">
            <i class="fas fa-shield-alt"></i>
            <span>Resources coming soon</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="resource-section">
    <h2><i class="fas fa-user-secret"></i> Penetration Testing</h2>
    <div class="resource-cards">
      <div class="resource-card placeholder-card">
        <div class="card-header">
          <i class="fas fa-user-ninja"></i>
          <h3>Penetration Testing Tools</h3>
        </div>
        <div class="card-content">
          <p>This section will list common penetration testing tools and frameworks</p>
          <div class="placeholder-message">
            <i class="fas fa-user-secret"></i>
            <span>Tools list coming soon</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="resource-section">
    <h2><i class="fas fa-network-wired"></i> Network Security</h2>
    <div class="resource-cards">
      <div class="resource-card placeholder-card">
        <div class="card-header">
          <i class="fas fa-sitemap"></i>
          <h3>Network Security Tools</h3>
        </div>
        <div class="card-content">
          <p>This section will contain resources for network security testing and analysis</p>
          <div class="placeholder-message">
            <i class="fas fa-network-wired"></i>
            <span>Network tools coming soon</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="resource-section">
    <h2><i class="fas fa-laptop-code"></i> Web Application Security</h2>
    <div class="resource-cards">
      <div class="resource-card placeholder-card">
        <div class="card-header">
          <i class="fas fa-globe"></i>
          <h3>Web Security Tools</h3>
        </div>
        <div class="card-content">
          <p>This section will contain resources for web application security testing</p>
          <div class="placeholder-message">
            <i class="fas fa-laptop-code"></i>
            <span>Web security tools coming soon</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="resource-section">
    <h2><i class="fas fa-mobile-alt"></i> Mobile Security</h2>
    <div class="resource-cards">
      <div class="resource-card placeholder-card">
        <div class="card-header">
          <i class="fas fa-tablet-alt"></i>
          <h3>Mobile Security Tools</h3>
        </div>
        <div class="card-content">
          <p>This section will contain resources for mobile application security testing</p>
          <div class="placeholder-message">
            <i class="fas fa-mobile-alt"></i>
            <span>Mobile security tools coming soon</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="resource-section">
    <h2><i class="fas fa-bug"></i> Exploit Development</h2>
    <div class="resource-cards">
      <div class="resource-card placeholder-card">
        <div class="card-header">
          <i class="fas fa-code"></i>
          <h3>Exploit Development Tools</h3>
        </div>
        <div class="card-content">
          <p>This section will contain resources for exploit development and testing</p>
          <div class="placeholder-message">
            <i class="fas fa-bug"></i>
            <span>Exploit tools coming soon</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="contribute-section">
  <h2><i class="fas fa-hands-helping"></i> Contribute Resources</h2>
  <p>
    Do you have security tools to share with the DC916 community? We're actively collecting high-quality links, tools, and guides for this section.
  </p>
  <p>
    Please reach out to the DC916 team through our <a href="https://discord.gg/Dkn5DZTaGh" target="_blank">Discord</a> or at one of our meetings to contribute your resources.
  </p>
</div>

<style>
/* Resource Page Styles */
.resource-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  background: rgba(91, 43, 130, 0.2);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--conifer);
}

.resource-icon {
  font-size: 3rem;
  color: var(--conifer);
  margin-right: 1.5rem;
}

.resource-title h1 {
  margin: 0 0 0.5rem 0;
  color: var(--conifer);
}

.resource-title p {
  margin: 0;
  color: var(--kings-silver);
  font-size: 1.1rem;
}

.resource-content {
  margin-bottom: 2rem;
}

.resource-section {
  margin-bottom: 3rem;
}

.resource-section h2 {
  color: var(--kings-silver);
  border-bottom: 1px solid var(--kings-purple);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.resource-section h2 i {
  margin-right: 0.5rem;
  color: var(--conifer);
}

.resource-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.resource-card {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--kings-purple);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border-color: var(--conifer);
}

.card-header {
  background: rgba(91, 43, 130, 0.3);
  padding: 1rem;
  display: flex;
  align-items: center;
}

.card-header i {
  font-size: 1.5rem;
  color: var(--conifer);
  margin-right: 1rem;
}

.card-header h3 {
  margin: 0;
  color: var(--kings-silver);
  font-size: 1.1rem;
}

.card-content {
  padding: 1rem;
}

.card-content p {
  color: var(--terminal-text);
  margin: 0 0 1rem 0;
}

.resource-link {
  display: inline-flex;
  align-items: center;
  background: var(--kings-purple);
  color: var(--terminal-text);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.resource-link:hover {
  background: var(--conifer);
  color: var(--terminal-background);
}

.resource-link i {
  margin-right: 0.5rem;
}

/* Tool Grid Styles */
.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.tool-card {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--kings-purple);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border-color: var(--conifer);
}

.tool-icon {
  font-size: 2.5rem;
  color: var(--conifer);
  margin-right: 1.5rem;
}

.tool-info h3 {
  margin: 0 0 0.5rem 0;
  color: var(--kings-silver);
}

.tool-info p {
  margin: 0;
  color: var(--terminal-text);
  font-size: 0.9rem;
}

/* Placeholder Styles */
.placeholder-card {
  border-style: dashed;
}

.placeholder-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: var(--kings-silver);
  text-align: center;
}

.placeholder-message i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  opacity: 0.7;
}

/* Contribute Section */
.contribute-section {
  background: rgba(91, 43, 130, 0.1);
  border: 1px dashed var(--kings-purple);
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 3rem;
}

.contribute-section h2 {
  color: var(--conifer);
  margin-top: 0;
  margin-bottom: 1rem;
}

.contribute-section h2 i {
  margin-right: 0.5rem;
}

.contribute-section p {
  color: var(--terminal-text);
  margin-bottom: 1rem;
}

.contribute-section a {
  color: var(--conifer);
  text-decoration: none;
  transition: all 0.3s ease;
}

.contribute-section a:hover {
  text-decoration: underline;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .resource-header {
    flex-direction: column;
    text-align: center;
  }
  
  .resource-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  
  .resource-cards {
    grid-template-columns: 1fr;
  }
  
  .tool-grid {
    grid-template-columns: 1fr;
  }
}
</style>
