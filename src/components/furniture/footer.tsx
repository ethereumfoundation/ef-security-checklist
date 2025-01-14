import { component$ } from "@builder.io/qwik";

export default component$(() => {

  const licenseLink = 'https://github.com/Lissy93/personal-security-checklist/tree/master/web';
  const authorLink = 'https://aliciasykes.com';

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-base-200 bg-opacity-25">
    <aside>
      <p><a href={licenseLink} class="link link-primary">Original checklist</a> licensed under MIT -
      © <a href={authorLink} class="link link-primary">Alicia Sykes</a> - 
      Customized for the EF</p>
    </aside>
  </footer>
  );
});
