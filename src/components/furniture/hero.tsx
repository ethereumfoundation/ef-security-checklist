import { $, component$ } from "@builder.io/qwik";
import { useTheme } from '~/store/theme-store';
import Icon from "~/components/core/icon";

export default component$(() => {
  const { theme, setTheme } = useTheme();

  const themes = [
    'dark', 'light', 'night', 'cupcake', 
    'bumblebee', 'corporate', 'synthwave', 'retro', 
    'valentine', 'halloween', 'aqua', 'lofi', 
    'fantasy', 'dracula'
  ];

    const deleteAllData = $(() => {
    const isConfirmed = confirm('Are you sure you want to delete all local data? This will erase your progress.');
    if (isConfirmed) {
      localStorage.clear();
      location.reload();
    }
  });

  return (
    <>
<div class="hero mb-8 mt-2 mx-auto xl:max-w-7xl max-w-6xl w-full xl:px-10">
  <div class="hero-content text-center bg-front shadow-sm lg:rounded-xl w-full">
    <div class="max-w-2xl flex flex-col place-items-center">
      <h1 class="text-5xl font-bold">EF Security Checklist</h1>
      <p class="subtitle pb-6">Step by step guide to personal digital security and privacy.</p>
      

      <div class="flex items-center justify-center gap-4">

        <div class="tooltip tooltip-bottom" data-tip="Theme">
          <label class="cursor-pointer grid place-items-center">
            <input
              type="checkbox"
              checked={theme.theme === 'dark'}
              onClick$={() => {
                setTheme(theme.theme === 'dark' ? 'light' : 'dark');
              }}
              class="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg class="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg"
                 width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
            </svg>
            <svg class="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg"
                 width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
        

        <div class="tooltip tooltip-bottom" data-tip="Settings">
          <p
            onClick$={() => ((document.getElementById('settings_modal') || {}) as HTMLDialogElement).showModal()}
            class="cursor-pointer"
          >
            <Icon icon="settings" width={20} height={20} />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    <dialog id="settings_modal" class="modal">
        <div class="modal-box">
          <div class="tabs tabs-lifted">
            <p class="tab tab-active">Settings</p>
          </div>
          <div class="modal-action justify-start w-full flex flex-col gap-4">
              <div class="flex items-between w-full justify-between">
                <label for="theme" class="label">Theme</label>
                <select 
                  id="theme" 
                  class="select select-bordered w-full max-w-xs"
                  onChange$={(event) => setTheme((event.target as HTMLSelectElement).value) }
                  >
                  <option disabled selected>Theme</option>
                  {themes.map((someTheme) => (
                    <option
                      key={someTheme}
                      value={someTheme}
                      selected={someTheme === theme.theme}
                      >
                      {someTheme.charAt(0).toUpperCase() + someTheme.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div class="flex items-between w-full justify-between">
                <label class="label">History Data</label>
                <button class="btn btn-primary" onClick$={deleteAllData}>Delete All</button>
              </div>
              <button
                class="btn my-1 mx-auto"
                onClick$={() => ((document.getElementById('settings_modal') || {}) as HTMLDialogElement).close()}
              >Close</button>
            </div>
        </div>
      </dialog>
      </>    
  );
});
