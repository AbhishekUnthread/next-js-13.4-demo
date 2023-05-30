import Image from "next/image";

import styles from "./job-list.module.css";

const JobList = (props) => {
  const { jobs } = props;

  return (
    <section className={styles.section}>
      {jobs.map((job) => {
        return (
          <div key={job._id} className={styles.card}>
            <Image
              alt="employer profile image"
              src={
                !job.employer.profileImage
                  ? "https://raw.githubusercontent.com/AbhishekKolge/Joblink-frontend/main/public/male-dummy-profile.jpg"
                  : job.employer.profileImage
              }
              width={80}
              height={80}
              blurDataURL="/male-dummy-profile.jpeg"
              placeholder="blur"
            />
            <div className={styles.content}>
              <span>{job.title}</span>
              <span>{`${job.description.slice(0, 100)}...`}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default JobList;
