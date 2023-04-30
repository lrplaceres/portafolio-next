import Error from "./_error";

const { default: Layout } = require("@/components/Layout");

const Github = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error />;
  }

  return (
    <Layout footer={false}>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="avatar" />
            <p>{user.bio}</p>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              Mi Blog
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/lrplaceres");
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      statusCode,
    }, // will be passed to the page component as props
  };
}

export default Github;
