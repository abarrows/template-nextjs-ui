import React from 'react';

import Image from 'next/image';

import SiteLink from 'src/components/commons/SiteLink';

function HomePage() {
  return (
    <main>
      <div>
        <Image
          alt="AMU Logo"
          height={180}
          priority
          src="/images/AMU_master_logo_U.svg"
          width={180}
        />
        <h1>
          Welcome to AMU&apos;s frontend template repo for Next.js powered apps.
        </h1>
        <p>
          Get started by editing <code>src/app/page.jsx</code>. See the
          project&apos;s{' '}
          <SiteLink
            href="https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template#readme"
            openInNewTab
          >
            README
          </SiteLink>{' '}
          for more information and links to additional documentation.
        </p>
      </div>
    </main>
  );
}

export default HomePage;
