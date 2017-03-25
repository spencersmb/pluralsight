import webpack from 'webpack';
import path from 'path';

const ROOT_PATH = path.resolve(__dirname);
export default {
  debug: true, // enables displaying debug info
  devtool: 'inline-source-map',
  noInfo: false, // webpack will display a list of all the files its bundling
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index') // targets index.js - must be placed last in the array
  ],
  target: 'web', //could target node here if our server was serving an app
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      App: path.resolve(ROOT_PATH, 'src/components/app.js'),
      About: path.resolve(ROOT_PATH, 'src/components/about/aboutPage.js'),
      Courses: path.resolve(ROOT_PATH, 'src/components/course/coursesPage.js'),
      ManageCourses: path.resolve(ROOT_PATH, 'src/components/course/ManageCoursePage.js'),
      Header: path.resolve(ROOT_PATH, 'src/components/common/header.js'),
      Home: path.resolve(ROOT_PATH, 'src/components/home/homePage.js'),
      Routes: path.resolve(ROOT_PATH, 'src/routes.js'),
      courseActions: path.resolve(ROOT_PATH, 'src/actions/courseActions.js')
    },
    extensions: ['', '.js']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
