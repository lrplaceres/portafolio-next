const { default: Layout } = require("@/components/Layout");

const _error = () => {
  return (
    <Layout>
      <p className="text-center"> No se pudo cargar la p&aacute;gina</p>
    </Layout>
  );
};

export default _error;