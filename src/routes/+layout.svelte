<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err) => {
          console.error('ServiceWorker registration failed: ', err);
        });
      }
    });
  </script>
  
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #f0f0f0;
    }
  
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }
  
    header img {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
  
    header h1 {
      margin: 20px 0 10px;
    }
  
    header p {
      margin: 0 0 20px;
      text-align: center;
      max-width: 600px;
    }
  
    .contact-links {
      display: flex;
      gap: 20px;
    }
  
    .contact-links a {
      color: #007bff;
      text-decoration: none;
    }
  
    .contact-links a:hover {
      text-decoration: underline;
    }
  
    @media (max-width: 600px) {
      header {
        padding: 20px;
      }
  
      header img {
        width: 100px;
        height: 100px;
      }
    }
  </style>
  
  <header>
    <img src="/profile.jpg" alt="Profile Picture">
    <h1>Mohith Rao</h1>
    <p>Cloud Platform Engineer with 7+ years of experience in full stack software development, specializing in Snowflake and cloud infrastructure.</p>
    <div class="contact-links">
      <a href="mailto:mohith.rao96@gmail.com">Email</a>
      <a href="https://www.linkedin.com/in/your-profile" target="_blank">LinkedIn</a>
      <a href="https://github.com/mrao2" target="_blank">GitHub</a>
    </div>
  </header>
  
  <slot></slot>
  