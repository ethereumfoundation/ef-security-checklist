import { component$ } from "@builder.io/qwik";

export default component$(() => {

  const licenseLink = 'https://github.com/Lissy93/personal-security-checklist/tree/master/web';
  const sourceLink = 'https://github.com/ethereumfoundation/ef-security-checklist';
  const authorLink = 'https://aliciasykes.com';

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-base-200 bg-opacity-25">
    <aside>
      <p>
        Based on the <a href={licenseLink} class="link link-primary">original checklist</a> licensed under MIT 
        by <a href={authorLink} class="link link-primary">Alicia Sykes</a>.<br/>

        Heavily customized for the EF, <a href={sourceLink} class="link link-primary">source code</a> available on GitHub.
      </p>
    </aside>
  </footer>
  );
});
