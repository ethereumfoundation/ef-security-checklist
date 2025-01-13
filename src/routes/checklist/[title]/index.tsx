import { component$, useContext } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { marked } from 'marked';

import Icon from '~/components/core/icon';
import { ChecklistContext } from '~/store/checklist-context';
import type { Section } from "~/types/PSC";
import Table from '~/components/psc/checklist-table';
import { useTheme } from '~/store/theme-store';

export default component$(() => {

  const checklists = useContext(ChecklistContext);

  const loc = useLocation();
  const slug = loc.params.title;

  // this is required to get the theme activated on page:
  useTheme();

  const section: Section | undefined = (checklists.value)
    .find((item: Section) => item.slug === slug);

  const parseMarkdown = (text: string | undefined): string => {
    return marked.parse(text || '', { async: false }) as string || '';
  };
  
  return (
    <div class="md:my-8 md:px-16 sm:px-2 rounded-md">
      
    <div class="p-8 mx-auto w-full max-w-[1200px]">
      <a class="flex" href="/"><Icon height={16} width={16} icon={'homepage'} class="mr-4 mt-1"  /> Return to the main page</a>
    </div>
    <article class="bg-back p-8 mx-auto w-full max-w-[1200px] rounded-lg shadow-md">
      <h1 class={['gap-2 text-5xl font-bold capitalize flex']}>
        <Icon height={36} width={36} icon={section?.icon || 'star'}  />
        {section?.title}
      </h1>
      <p class="py-2" dangerouslySetInnerHTML={parseMarkdown(section?.intro)}></p>

      <div class="overflow-x-auto">
        {section && (<Table section={section} />)}
      </div>

      {section && section.softwareLinks && (
        <>
        <div class="divider my-4">Useful Links</div>
        <h3 class="text-xl my-2">Recommended Software</h3>
          <ul class="list-disc pl-4">
          {section.softwareLinks.map((link, index) => (
            <li key={index}>
              <a class="link link-primary" href={link.url} title={link.description}>{link.title}</a>
            </li>
          ))}
          </ul>
        </>
      )}

    </article>
    </div>
  );
});

