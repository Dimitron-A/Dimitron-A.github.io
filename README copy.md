# DIMITRON - Retro 80s Portfolio Website

A vintage 80s-style portfolio website with typewriter aesthetics and CRT monitor effects.

## Features

- **Retro Terminal Design**: Green phosphor CRT monitor aesthetic
- **Typewriter Effect**: Animated text typing for authentic feel
- **Scanline & CRT Effects**: Authentic vintage computer display simulation
- **Responsive Navigation**: Easy section switching
- **Skills Showcase**: Animated progress bars for technical skills
- **Projects Gallery**: Display your best work
- **Contact Form**: PHP-powered contact system
- **Uptime Counter**: Live session timer

## Technologies Used

- HTML5
- CSS3 (with animations and effects)
- JavaScript (ES6+)
- PHP (for contact form)

## Setup Instructions

1. **Local Development**:
   - Open `index.html` in a web browser
   - For contact form to work, you need a PHP server

2. **PHP Server Setup**:
   ```bash
   php -S localhost:8000
   ```
   Then visit: http://localhost:8000

3. **Customize Your Content**:
   - Edit `script.js` to update:
     - Your name and bio in the About section
     - Skills and proficiency levels
     - Project descriptions
   - Update `contact.php` with your email address (line 35)

4. **Deploy**:
   - Upload all files to your web hosting
   - Ensure PHP is enabled on your server
   - Make sure `contact.php` has proper permissions

## Customization Guide

### Change Colors:
Edit CSS variables in `style.css`:
```css
:root {
    --green: #00ff41;      /* Main text color */
    --amber: #ffb000;      /* Accent color */
    --bg-dark: #0a0a0a;    /* Background */
}
```

### Add More Projects:
In `script.js`, add to the `projects` array:
```javascript
{
    title: 'Your Project',
    description: 'Description here',
    tech: 'Technologies used'
}
```

### Modify Skills:
In `script.js`, edit the `skills` array with your skills and levels (0-100).

## Browser Compatibility

Works best in modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari

## License

Free to use for personal portfolio projects.

---

**SYSTEM STATUS: OPERATIONAL**
**VERSION: 1.0.1985**
