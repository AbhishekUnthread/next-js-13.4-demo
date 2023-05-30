import JobList from "./components/job-list";

const getJobs = async () => {
  const jobsJsonData = await fetch(`${process.env.NEXT_PUBLIC_URL}/jobs`, {
    next: { revalidate: 60 },
  });
  return jobsJsonData.json();
};

const getCategories = async () => {
  const categoriesJsonData = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/job-categories`
  );
  return categoriesJsonData.json();
};

const HomePage = async () => {
  const [jobs, categories] = await Promise.all([getJobs(), getCategories()]);

  return <JobList {...jobs} {...categories} />;
};

export default HomePage;
