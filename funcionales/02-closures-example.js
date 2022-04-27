// const f = (x) => {
//   return () => console.log(x);
// };

// f('')();

const authProps = {
  createAt: { default: new Date() },
  updateAt: { default: new Date() },
  createBy: { type: Schema.Types.ObjectId, ref: 'User' },
  updateBy: { type: Schema.Types.ObjectId, ref: 'User' },
};

const Model = (defaultProps) => {
  return (name, props) => {
    const schema = mongose.schema({
      ...defaultProps,
      props,
    });
    return mongose.model(name, schema);
  };
};

export const withAuth = Model(authProps);

withAuth('Product', {
  name: String,
  desc: String,
});
