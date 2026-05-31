export interface EventSection {
  title: string;
  content: string;
}

export interface GalleryItem {
  alt: string;
  placeholder: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'tech-meet' | 'hackathon' | 'conference' | 'workshop';
  shortDescription: string;
  overview: string;
  whatHappened: string;
  whatILearned: string;
  reflection: string;
  keyTakeaways: string[];
  gallery: GalleryItem[];
  tags: string[];
}
