export default interface Testimonial {
  id: number;
  createdAt: string;
  updatedAt?: string;
  comment: string;
  commentator: string;
  images: {
    url: string;
    imagename: string;
  }[];
  job: string;
  stars: number;
}
