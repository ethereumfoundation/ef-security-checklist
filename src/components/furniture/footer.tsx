import { component$ } from "@builder.io/qwik";

export default component$(() => {

  const licenseLink = 'https://github.com/Lissy93/personal-security-checklist/blob/master/LICENSE';
  const authorLink = 'https://aliciasykes.com';

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-base-200 bg-opacity-25">
    <aside>
      <p>Original checklist licensed under <a href={licenseLink} class="link link-primary">MIT</a> -
      © <a href={authorLink} class="link link-primary">Alicia Sykes</a> - 
      Customized for EF </p>
    </aside>
  </footer>
  );
});
