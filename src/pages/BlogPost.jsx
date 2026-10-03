import { Link, useParams } from "react-router-dom";
import { SITE } from "../config/site";
import { POSTS, getPost } from "../data/blog";
import { getService } from "../data/services";
import { articleSchema, breadcrumbSchema } from "../lib/schema";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import InquiryButton from "../components/InquiryButton";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;
  const service = getService(post.service);
  const Body = post.body;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Guides", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }];
  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEO title={`${post.title} | ${SITE.name}`} description={post.description} path={`/blog/${post.slug}`} image={post.image}
        jsonLd={[articleSchema(post), breadcrumbSchema(crumbs)]} />
      <PageHeader title={post.title} crumbs={crumbs}>
        <p className="mt-4 text-concrete/70">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</time>, {post.readMins} min read
        </p>
      </PageHeader>
      <article className="py-14 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="prose-site text-lg"><Body /></div>
          <aside className="h-fit space-y-8 lg:sticky lg:top-24">
            <div className="bg-white p-6">
              <h2 className="font-display text-2xl font-semibold">Need this installed?</h2>
              <p className="mt-2 text-sm text-asphalt/75">We do {service.name.toLowerCase()} around {SITE.city}. Free site visit inside city limits.</p>
              <InquiryButton service={service.name} className="btn-sm mt-4 bg-sodium text-asphalt hover:bg-sodium-dark" />
              <Link to={`/services/${service.slug}`} className="mt-3 block text-sm font-semibold text-wire hover:underline">About our {service.name.toLowerCase()} service</Link>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold">More guides</h2>
              <ul className="mt-3 space-y-3 text-[15px]">
                {more.map((p) => <li key={p.slug}><Link to={`/blog/${p.slug}`} className="text-wire hover:underline">{p.title}</Link></li>)}
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
