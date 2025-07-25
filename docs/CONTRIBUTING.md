# Contributing to Bangladesh Address Selection

Thank you for your interest in contributing to the Bangladesh Address Selection project! This document provides guidelines and information for contributors.

## 🎯 Project Vision

Our goal is to create the most comprehensive and user-friendly Bangladesh administrative address selection system, showcasing different implementation approaches while serving the developer community.

## 🤝 How to Contribute

### 🐛 Bug Reports

When reporting bugs, please include:

1. **Clear description** of the issue
2. **Steps to reproduce** the problem
3. **Expected vs actual behavior**
4. **Browser and version** information
5. **Screenshots** if applicable

**Bug Report Template:**

```markdown
## Bug Description

Brief description of the bug

## Steps to Reproduce

1. Go to...
2. Click on...
3. See error...

## Expected Behavior

What should happen

## Actual Behavior

What actually happens

## Environment

- Browser: Chrome 91.0
- OS: Windows 10
- Device: Desktop/Mobile
```

### ✨ Feature Requests

For new features, please provide:

1. **Clear description** of the feature
2. **Use case scenarios**
3. **Implementation suggestions** (if any)
4. **Mockups or examples** (if applicable)

### 💻 Code Contributions

#### Development Setup

1. **Fork the repository**

   ```bash
   git clone https://github.com/yourusername/bd-address-selection.git
   cd bd-address-selection
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**

   - Follow the coding standards below
   - Test your changes thoroughly
   - Update documentation if needed

4. **Commit your changes**

   ```bash
   git add .
   git commit -m "Add: descriptive commit message"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

#### Coding Standards

##### JavaScript Guidelines

```javascript
// ✅ Good: Use descriptive names
function populateDistrictDropdown(divisionName) {
  // Clear, descriptive function name
}

// ✅ Good: Add JSDoc comments
/**
 * Populate districts based on selected division
 * @param {string} divisionName - Name of the selected division
 * @returns {void}
 */
function populateDistrictDropdown(divisionName) {
  // Implementation
}

// ✅ Good: Handle errors gracefully
async function loadData() {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Data loading failed:", error);
    showErrorMessage("Failed to load data");
  }
}

// ❌ Avoid: Unclear variable names
function func(d) {
  let x = document.getElementById("div");
  // What is 'd'? What is 'x'?
}
```

##### CSS Guidelines

```css
/* ✅ Good: Use BEM methodology */
.selection-box__dropdown {
  /* Component block, element */
}

.selection-box__dropdown--disabled {
  /* Component block, element, modifier */
}

/* ✅ Good: Use custom properties for theming */
:root {
  --primary-color: #16a085;
  --secondary-color: #27ae60;
  --error-color: #e74c3c;
}

/* ✅ Good: Mobile-first responsive design */
.container {
  /* Mobile styles */
}

@media (min-width: 768px) {
  .container {
    /* Desktop styles */
  }
}

/* ❌ Avoid: !important unless absolutely necessary */
.bad-style {
  color: red !important; /* Avoid this */
}
```

##### HTML Guidelines

```html
<!-- ✅ Good: Semantic HTML -->
<section class="comparison-wrapper" role="main">
  <div class="selection-box" role="region" aria-labelledby="js-heading">
    <h2 id="js-heading">JavaScript Approach</h2>
    <form>
      <div class="form-group">
        <label for="divisions">Select Division</label>
        <select id="divisions" aria-describedby="division-help">
          <option disabled selected>Select Division</option>
        </select>
        <div id="division-help" class="sr-only">
          Choose your administrative division
        </div>
      </div>
    </form>
  </div>
</section>

<!-- ❌ Avoid: Non-semantic HTML -->
<div class="wrapper">
  <div class="box">
    <div class="title">JavaScript Approach</div>
    <div>
      <div>
        <div>Select Division</div>
        <select>
          <option>Select Division</option>
        </select>
      </div>
    </div>
  </div>
</div>
```

#### File Organization

```
📁 Your Changes Should Follow This Structure:
├── 📁 css/
│   ├── style.css           # Base styles only
│   └── comparison.css      # Component-specific styles
├── 📁 js/
│   ├── app.js             # Main application logic
│   ├── utils.js           # Utility functions (if needed)
│   └── country.js         # Hardcoded data (minimal changes)
├── 📁 json/
│   └── country.json       # Data updates only
└── 📁 docs/
    ├── CONTRIBUTING.md    # This file
    └── CHANGELOG.md       # Version history (if needed)
```

### 📊 Data Contributions

#### Administrative Data Updates

When updating `json/country.json`:

1. **Verify accuracy** with official government sources
2. **Maintain structure** consistency
3. **Test thoroughly** with the application
4. **Document sources** in your PR description

#### Data Validation

```javascript
// Example validation for new data
const dataStructure = {
  country: [
    {
      name: "Bangladesh",
      division: [
        {
          name: "Division Name",
          district: [
            {
              name: "District Name",
              upazila: [
                {
                  name: "Upazila Name",
                  union: [
                    {
                      name: "Union Name",
                      village: [{ name: "Village Name" }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
```

### 🎨 Design Contributions

#### UI/UX Improvements

- **Follow material design principles**
- **Ensure accessibility compliance**
- **Test on multiple devices**
- **Maintain visual consistency**

#### Design Assets

- **Use SVG** for icons when possible
- **Optimize images** for web
- **Follow brand guidelines**
- **Provide multiple formats** when needed

### 📖 Documentation Contributions

#### What to Document

- **New features** and how to use them
- **API changes** and migration guides
- **Configuration options**
- **Troubleshooting guides**
- **Code examples**

#### Documentation Standards

- **Clear, concise writing**
- **Code examples** with explanations
- **Screenshots** for UI features
- **Update table of contents**
- **Check spelling and grammar**

## 🧪 Testing Guidelines

### Manual Testing Checklist

- [ ] **All dropdowns populate correctly**
- [ ] **Cascading selections work properly**
- [ ] **Error states display appropriately**
- [ ] **Responsive design works on mobile**
- [ ] **Keyboard navigation functions**
- [ ] **Screen reader compatibility**
- [ ] **Loading states are visible**
- [ ] **Network error handling works**

### Browser Testing

Test your changes in:

- [ ] **Chrome** (latest)
- [ ] **Firefox** (latest)
- [ ] **Safari** (latest)
- [ ] **Edge** (latest)
- [ ] **Mobile browsers** (iOS Safari, Android Chrome)

### Performance Testing

- [ ] **Page load times** are reasonable
- [ ] **Memory usage** doesn't increase significantly
- [ ] **Large datasets** don't cause browser freezing
- [ ] **Network requests** are optimized

## 📋 Pull Request Process

### PR Checklist

- [ ] **Descriptive title** and description
- [ ] **Reference related issues** (if applicable)
- [ ] **Include screenshots** for UI changes
- [ ] **Update documentation** if needed
- [ ] **Test thoroughly** across browsers
- [ ] **Follow coding standards**
- [ ] **No merge conflicts**

### PR Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Refactoring

## Testing

- [ ] Manual testing completed
- [ ] Cross-browser testing done
- [ ] Mobile testing verified

## Screenshots

(If applicable)

## Related Issues

Fixes #(issue number)
```

### Review Process

1. **Automated checks** run first
2. **Maintainer review** within 48 hours
3. **Address feedback** promptly
4. **Final approval** and merge

## 🏷️ Issue Labels

| Label              | Description                   |
| ------------------ | ----------------------------- |
| `bug`              | Something isn't working       |
| `enhancement`      | New feature or improvement    |
| `documentation`    | Documentation updates         |
| `good first issue` | Good for newcomers            |
| `help wanted`      | Extra attention needed        |
| `question`         | Further information requested |
| `duplicate`        | Issue already exists          |
| `wontfix`          | Not planned to be fixed       |

## 💬 Communication

### Where to Ask Questions

- **GitHub Issues**: Technical questions and bug reports
- **GitHub Discussions**: General questions and ideas
- **Code Comments**: Specific implementation questions

### Communication Guidelines

- **Be respectful** and constructive
- **Provide context** for your questions
- **Search existing issues** before creating new ones
- **Use clear, descriptive titles**
- **Include relevant code snippets**

## 🎉 Recognition

### Contributors

All contributors will be:

- **Listed in README.md** contributor section
- **Credited in release notes** for significant contributions
- **Given appropriate GitHub repository permissions** for regular contributors

### Contribution Types

We recognize various types of contributions:

- 💻 **Code contributions**
- 📖 **Documentation improvements**
- 🐛 **Bug reports and testing**
- 🎨 **Design and UX improvements**
- 📊 **Data updates and validation**
- 💡 **Ideas and feature requests**
- 🌍 **Translation and localization**

## 📞 Getting Help

### Resources

- **Project Documentation**: Start with README.md
- **Code Examples**: Check existing implementations
- **GitHub Issues**: Browse existing questions
- **Community**: Engage with other contributors

### Contact

- **GitHub Issues**: For technical questions
- **Email**: For urgent or private matters
- **GitHub Discussions**: For general community interaction

## 🔄 Versioning

We follow **Semantic Versioning** (SemVer):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

## 📄 Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Expected Behavior

- **Be welcoming** to newcomers
- **Be respectful** of differing viewpoints
- **Accept constructive criticism** gracefully
- **Focus on community benefit**
- **Show empathy** towards other community members

### Unacceptable Behavior

- Harassment, trolling, or discriminatory language
- Personal attacks or political arguments
- Publishing private information without permission
- Any conduct inappropriate in a professional setting

---

Thank you for contributing to making Bangladesh's administrative data more accessible to developers and users everywhere! 🇧🇩

_Happy coding!_ 🚀
