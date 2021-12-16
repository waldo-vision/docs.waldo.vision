/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import './NotFound.css';

function NotFound() {
  return (
    <Layout
      title={translate({
        id: 'theme.NotFound.title',
        message: 'Page Not Found',
      })}>
        <main>
          <h1>404 Error</h1>
          <p class="zoom-area">The page your looking for was <b>not found.</b></p>
          <section class="error-container">
            <span class="four"><span class="screen-reader-text">4</span></span>
            <span class="zero"><span class="screen-reader-text">0</span></span>
            <span class="four"><span class="screen-reader-text">4</span></span>
          </section>
          <div class="link-container">
            <Link href="/" class="more-link">
              Go back to the homepage
            </Link>
          </div>
        </main>
    </Layout>
  );
}

export default NotFound;
