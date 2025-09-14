import {metadata as polMeta} from '@/app/projects/content/test-politico.mdx';
import { metadata as eduMeta } from '@/app/projects/content/educational-site.mdx';

export const projectsMetadata = [
  {...polMeta, slug: 'test-politico'},
  {...eduMeta, slug: 'educational-site'}
];