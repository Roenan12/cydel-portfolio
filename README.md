# Cydel Iron Works - Roll-Up Door Services Landing Page

Welcome to the **Cydel Iron Works** landing page repository! This project is a responsive, single-page website designed to showcase the services of Cydel Iron Works, specializing in roll-up door services. The site is built using **Create React App**, **Vanilla CSS**, and **JavaScript**.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Getting API Keys](#getting-api-keys)
- [Libraries and Tools](#libraries-and-tools)

## Demo

You can view the live demo of the landing page [here](https://cydelironworks.netlify.app/).

## Features

- **Responsive Design**: Fully responsive design that adapts to all screen sizes, from mobile to desktop.
- **Modern UI/UX**: Clean and intuitive user interface with a focus on user experience.
- **Services Overview**: Information about roll-up door services, including applications of shutters, shutter options, manual and motorized operation.
- **Project Portfolio**: Interactive photo gallery slider showcasing completed projects, allowing users to view a collection of images in a sliding format.
- **Contact Form**: Easy-to-use contact form, the functionality is built with **EmailJS** and **Axios**. The form is protected with **reCAPTCHA** verification to prevent spam.

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/cydel-portfolio.git
   ```

2. **Change to project directory**:
   ```bash
    cd cydel-portfolio
   ```
3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm start
   ```

5. **Open your browser** and navigate to http://localhost:3000.

## Getting API Keys

To use the contact form functionality, you'll need to set up your own API keys for **EmailJS** and **reCAPTCHA**.

1. **EmailJS**: Follow the [EmailJS Quick Start Guide](https://www.emailjs.com/docs/examples/reactjs/) to set up your EmailJS account and get your API key.

   - Sign up for an account at [EmailJS](https://www.emailjs.com/).
   - Create a new email service and email template in the EmailJS dashboard.
   - Generate an API key for your account, which will be used to send emails from the contact form.
   - After registration, you will receive a **Public Key**, **Service ID**, and a **Template ID**.

2. **reCAPTCHA**: Visit the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create) to register your site and get your reCAPTCHA site and secret keys.

   - Sign in with your Google account and navigate to the [Admin Console](https://www.google.com/recaptcha/admin/create).
   - Register your site by providing a label, selecting the reCAPTCHA type, and entering your domain.
   - After registration, you will receive a **Site Key** and a **Secret Key**. These keys are required for integrating reCAPTCHA with your contact form.
   - Follow the [Google reCAPTCHA documentation](https://developers.google.com/recaptcha/docs/v3) for detailed integration instructions.

3. **Replace the Key and ID in .env**
   ```bash
   REACT_APP_PUBLIC_KEY="your-own-public-key"
   REACT_APP_SERVICE_ID="your-own-service-id"
   REACT_APP_TEMPLATE_ID="your-own-template-id"
   REACT_APP_SITE_KEY="your-own-site-key"
   ```

## Libraries and Tools

This project utilizes several libraries and tools to enhance the functionality and user experience:

- **React Awesome Reveal**: Used for smooth animations to reveal the compoenents on scroll. [Documentation](https://www.npmjs.com/package/react-awesome-reveal)
- **React Scroll**: Provides smooth scrolling functionality for navigating through the page sections. [Documentation](https://www.npmjs.com/package/react-scroll)

- **React Spring**: Used to animate the accumulating numbers on the About section. [Documentation](https://react-spring.dev/)

- **React Toastify**: Used for displaying notification pop-ups, such as form submission success or error messages. [Documentation](https://www.npmjs.com/package/react-toastify)

- **React Lazy Load Image Component**: Used for lazy loading images to improve performance and reduce the initial load time of the page. [Documentation](https://www.npmjs.com/package/react-lazy-load-image-component)

- **Axios**: Used for making HTTP requests, such as sending form data to EmailJS. [Documentation](https://axios-http.com/docs/intro)

- **Lucide React**: A collection of free, customizable, and high-quality icons for use in the project. [Documentation](https://lucide.dev/docs/lucide-react)
