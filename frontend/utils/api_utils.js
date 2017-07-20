export const login = credentials => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: credentials,
  })
);

export const signup = info => (
  $.ajax({
    url: 'api/users',
    method: 'POST',
    data: info,
  })
);

export const logout = () => (
  $.ajax({
    url: 'api/session',
    method: 'DELETE',
  })
);

export const guestLogin = () => (
  $.ajax({
    url: 'api/session/guest_user',
    method: 'GET',
  })
);