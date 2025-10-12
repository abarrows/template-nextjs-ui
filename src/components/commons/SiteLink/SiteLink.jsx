import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { isUrl } from 'src/helpers/utilities/string-comparisons';
import styles from './SiteLink.module.scss';

/* eslint-disable react/jsx-props-no-spreading */
function SiteLink({
  children,
  className = null,
  title = '',
  href = '',
  nextLinkProps = null,
  openInNewTab = false,
  onClick = undefined,
  ...props
}) {
  // Support situations where no href can be sent and the link needs to be disabled
  if (!href) {
    return (
      <div
        className={className || styles.link}
        data-testid="site-link-disabled"
        {...props}
      >
        {children}
      </div>
    );
  }

  // Bundle these attributes together for consistent usage
  const newTab = openInNewTab
    ? { rel: 'noopener noreferrer', target: '_blank' }
    : null;
  const dataTestId = `site-link${isUrl(href) ? '-external' : ''}`;
  return (
    <Link
      className={className || styles.link}
      data-testid={dataTestId}
      href={href}
      onClick={onClick}
      title={title}
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

  /** Optional class for this link. If a class is not provided, SiteLink will
   * apply default styles. */
  className: PropTypes.string,

  /** The path or URL the link points to for the anchor tag. */
  href: PropTypes.string,

  /** Next Link has several props it accepts, they can be passed
   * to it via this optional prop. For more information,
   * see https://nextjs.org/docs/api-reference/next/link */

  nextLinkProps: PropTypes.object,

  /** Optional flag to open the link in a new tab/window. */
  openInNewTab: PropTypes.bool,

  title: PropTypes.string,
  /** Optional `onClick` function triggered when clicking the link. Note: the
   * `onClick` event on links is also triggered with keyboard navigation, so
   * `onKeyUp` and similar events are not needed. */
  onClick: PropTypes.func,
};

export default SiteLink;
