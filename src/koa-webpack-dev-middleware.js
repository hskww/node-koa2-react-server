import webpackDevMiddleware from 'webpack-dev-middleware';

// personal taste, totally optional
const stats = {chunkModules: false, colors: 'debug' != process.env.NODE_ENV};

export default (compiler, options = {}) => {
  // this is how we get the original webpack dev middleware, also totally
  // optional if you willing to let user pass in everything.
  const {publicPath} = compiler.options.output;
  const defaults = options.publicPath ? options : {publicPath, stats};
  const middleware = webpackDevMiddleware(compiler, Object.assign({}, defaults, options));
  
  // CAUTION: explicitly return middleware here because we don't want to
  // initialize webpackDevMiddleware instance through every request.
  return async (context, next) => {
    const hasNext = await applyMiddleware(middleware, context.req, {
      send: content => context.body = content,
      setHeader: function() {context.set.apply(context, arguments)}
    });
    hasNext && await next();
  };
}

function applyMiddleware(middleware, req, res) {
  const _send = res.send;
  return new Promise((resolve, reject) => {
    try {
      res.send = function() {_send.apply(res, arguments) && resolve(false)};
      middleware(req, res, resolve.bind(null, true));
    } catch (error) {
      reject(error);
    }
  });
}