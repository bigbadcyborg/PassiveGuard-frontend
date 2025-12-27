# PassiveGuard Frontend: Cyber-Security Auditing Dashboard

Welcome to the PassiveGuard frontend, a modern, high-performance security auditing platform designed for developers and security professionals. Our interface provides a comprehensive overview of your project's security posture through a sleek, cyber-themed dashboard.

---

## Key Features for Customers

### Real-Time Security Dashboard
Stay informed with a bird's-eye view of your entire infrastructure. Our dashboard provides:
- **Severity Distribution**: Instantly visualize High, Medium, and Low severity findings.
- **Vulnerability Trends**: Track the most common vulnerability types across your scans.
- **Recent Scan Activity**: Quickly access and monitor your latest audit reports.

### Deep-Dive Scan Reports
Go beyond simple notifications with detailed, actionable insights:
- **Static Code Analysis (SAST)**: Integration with Semgrep, Bandit, and custom engines to find hardcoded secrets, SQLi, and XSS.
- **Taint Tracking**: Trace untrusted data from user input (sources) to dangerous sinks.
- **IaC Scanning**: Identify misconfigurations in Docker, Kubernetes, and Terraform.
- **Supply Chain Security**: Generate CycloneDX SBOMs and track open-source vulnerabilities (SCA).
- **Network Traffic Analysis**: Passive PCAP inspection for plaintext credentials and insecure protocols.

### Actionable Remediation
We don't just find bugs; we help you fix them:
- **Code Snippets & Evidence**: See exactly where the vulnerability exists in your code.
- **Remediation Examples**: Targeted advice and code snippets to resolve issues quickly.
- **Status Management**: Track the lifecycle of a finding from 'Open' to 'Fixed' or 'Accepted Risk'.

### Professional Reporting
- **PDF Export**: Generate executive-ready PDF reports with a single click.
- **Filtering & Search**: Drill down into specific findings by severity, status, or vulnerability type.

---

## User Experience & Design

PassiveGuard is built with a **Cyber-Security First** aesthetic:
- **Immersive UI**: Features neon accents, scanlines, and glitch effects for a professional security operations center (SOC) feel.
- **Smooth Animations**: Powered by `Framer Motion` for a responsive and modern feel.
- **Data Visualization**: Beautifully rendered charts using `Recharts` for clear data interpretation.
- **Live Updates**: Real-time scan progress monitoring via WebSockets.

---

## Edge Agents & Privacy-Preserving Scanning

PassiveGuard supports distributed Edge Agents for privacy-preserving local scanning:

- **Edge Agent Page**: 
  - Live connection status monitoring
  - Visual directory selector with file browser
  - Platform-specific Docker command generator (Windows/Linux-WSL)
  - Automatic path conversion for cross-platform compatibility
  - "Tell Me More" expandable information section
- **File Browser**: Visual directory navigation showing files and directories
- **Real-Time Updates**: Socket.IO-based connection monitoring

## User Tiers

PassiveGuard uses a three-tier system:

- **Sentinel** (Free): Must use Edge Agents for all scans - source code never leaves your machine
- **Overdrive** (Premium): Can use Hub-based remote scanning or Edge Agents
- **Nexus** (Enterprise): Full access including remote scanning and Edge Agents

## Advanced Admin Capabilities
For enterprise users, PassiveGuard includes robust administration tools:
- **User Management**: Promote/demote users between tiers (Sentinel, Overdrive, Nexus)
- **Role Modification**: Change user roles and permissions
- **Traffic Monitoring**: Global view of network traffic and potential anomalies

---

## Technical Overview

The PassiveGuard frontend is a robust Single Page Application (SPA) built with:
- **React**: For a modular and efficient UI component architecture.
- **React Router**: Seamless navigation across the platform.
- **Recharts**: High-performance data visualization.
- **Framer Motion**: State-of-the-art UI animations.
- **WebSockets (Socket.io)**: Real-time communication for live scan feedback.
- **JWT Authentication**: Secure, token-based access control.

---

## Pricing & Plans
PassiveGuard offers flexible pricing to suit your needs:
- **Sentinel** (Free): Edge Agent-based scanning - privacy-focused, code never leaves your machine
- **Overdrive** (Premium): Hub-based remote scanning or Edge Agents - full feature access
- **Nexus** (Enterprise): Full access including remote scanning and Edge Agents - advanced features and priority support

---

© 2025 PassiveGuard Security Solutions. All rights reserved.

