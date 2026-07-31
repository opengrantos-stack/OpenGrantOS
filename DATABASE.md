# OpenGrant OS Database Design

## Overview

This document describes the initial database structure planned for the OpenGrant OS MVP.

The database will store users, projects, grants, applications and milestones.

---

# Core Entities

## Users

Stores platform users.

Fields:

- id
- name
- email
- wallet_address
- role

Roles:

- Applicant
- Grant Provider
- Reviewer

---

## Projects

Stores project information.

Fields:

- id
- project_name
- description
- category
- github_url
- owner_id

---

## Grants

Stores grant opportunities.

Fields:

- id
- title
- ecosystem
- description
- requirements
- deadline

---

## Applications

Stores grant applications.

Fields:

- id
- project_id
- grant_id
- proposal
- status

Application Status:

- Submitted
- Under Review
- Approved
- Rejected

---

## Milestones

Tracks project progress.

Fields:

- id
- project_id
- title
- description
- status
- completion_date

---

## Future Expansion

Possible future database features:

- Reputation system
- Blockchain records
- DAO governance data
- Multi-chain identity