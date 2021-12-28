import HtmlWebpackPlugin from 'html-webpack-plugin';
// import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import { cfg } from './config.js';


import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDirectory = 'dist';


const isDev = process.env.NODE_ENV === 'development';
console.log('isDev: ', isDev);
const isProd = !isDev;

const devtool = () => isDev ? 'source-map' : false;
const mode = isProd ? 'production' : 'development';
const target = isProd ? `browserslist` : `web`;


export default {
  entry: {
    main: path.resolve(__dirname, './src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, outputDirectory),
    filename: 'bundle.js',
    assetModuleFilename: `images/[hash][ext][query]`
  },


  devtool: devtool(),
  mode,
  target,

  resolve: {
    extensions: [`*`, `.js`, `.jsx`, `.json`, `.css`, `.ts`, `.tsx`],
    alias: {
      '@redux': path.resolve(__dirname, './src/client/redux'),
    },
  },

  devServer: {
    port: 3000,
    // open: true,
    hot: true,
    // compress: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:7070'
    }
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: ``,
      template: './public/index.html',
      favicon: './public/img/favicon.png'
    }),
    new Dotenv()
  ],

  module: {
    rules: [
      {
        test: /\.(js?x)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: `ts-loader`
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: `css-loader`,
          },
          {
            loader: `sass-loader`,
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.md$/,
        use: "raw-loader",
      },
    ]
  },
};
