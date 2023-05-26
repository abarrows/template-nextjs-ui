import React from 'react';

import Link from 'next/link';
import PropTypes from 'prop-types';

import { isUrl } from 'src/helpers/utilities/string-comparisons';

/* eslint-disable react/jsx-props-no-spreading */
function SiteLink({
  children,
  className,
  href,
  onClick,
  nextLinkProps,
  openInNewTab,
  ...props
}) {
  // Support situations where no href can be sent and the link needs to be disabled
  if (!href) {
    return (
      <div className={className} data-testid="site-link-disabled" {...props}>
        {children}
      </div>
    );
  }

  // Bundle these attributes together for consistent usage
  const newTab = openInNewTab
    ? { rel: 'noopener noreferrer', target: '_blank' }
    : null;

  if (isUrl(href)) {
    return (
      <a
        className={className}
        data-testid="site-link-external"
        href={href}
        onClick={onClick}
        {...newTab}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className={className}
      data-testid="site-link"
      href={href}
      onClick={onClick}
      {...nextLinkProps}
      {...newTab}
      {...props}
    >
      {children}
    </Link>
  );
}

SiteLink.propTypes = {
  /** The link content. */
  children: PropTypes.node.isRequired,

  /** Optional class for this link. */
  className: PropTypes.string,

  /** The path or URL the link points to for the anchor tag. */
  href: PropTypes.string,

  /** Next Link has several props it accepts, they can be passed
   * to it via this optional prop. For more information,
   * see https://nextjs.org/docs/api-reference/next/link */
  // eslint-disable-next-line react/forbid-prop-types
  nextLinkProps: PropTypes.object,

  /** Optional flag to open the link in a new tab/window. */
  openInNewTab: PropTypes.bool,

  /** Optional `onClick` function triggered when clicking the link. Note: the
   * `onClick` event on links is also triggered with keyboard navigation, so
   * `onKeyUp` and similar events are not needed. */
  onClick: PropTypes.func,
};

SiteLink.defaultProps = {
  className: null,
  href: '',
  nextLinkProps: null,
  openInNewTab: false,
  onClick: undefined,
};

export default SiteLink;
