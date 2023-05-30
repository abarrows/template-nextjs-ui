const serviceRequestHandler = async (url, method = 'GET', body = null) => {
  let payload;

  if (typeof window === 'undefined') {
    // Required for any request to the service
    const subscriptionKey = {
      'Ocp-Apim-Subscription-Key': process.env.API_SERVICE_KEY,
    };

    // Common request headers for most methods
    const headers = {
      ...subscriptionKey,
      'Content-Type': 'application/json',
      Accept: 'text/plain',
    };

    // Different kinds of request options for each method type
    const options = {
      delete: {
        method: 'DELETE',
        body,
        headers,
      },
      get: {
        method: 'GET',
        headers: { ...subscriptionKey },
      },
      patch: {
        method: 'PATCH',
        body,
        headers,
      },
      post: {
        method: 'POST',
        body,
        headers,
      },
      put: {
        method: 'PUT',
        body,
        headers,
      },
    };

    // Make the request to the service
    payload = await fetch(url, options[method.toLowerCase()]);
  } else {
    // eslint-disable-next-line no-console
    console.error('`serviceRequestHandler` can only be used server-side.');
  }

  return payload;
};

export default serviceRequestHandler;
