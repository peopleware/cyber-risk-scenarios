# HTTP Stack

## HTTP Semantics and Caching

Since June 2022, the [HTTP Semantics] and [HTTP Caching] have been [separated out] from specific protocol versions.
Together, they describe the parts of the HTTP protocols relevant for our risk scenarios.

The intention is for the [HTTP Semantics] and [HTTP Caching] specifications to be independent of transport concerns.
[HTTP Semantics] and [HTTP Caching] is aimed at OSI layer 6 (Presentation) and 7 (Application), while the remainders of
[HTTP/1.1], [HTTP/2], and [HTTP/3] and its accompanying RFCs ([RFC 9204], [RFC 9218]) are aimed at lower layers.

## HTTP Stack

We expect the usage of an _HTTP Stack_, with its own risk management, outside the scope of the risk scenarions aimed at
the code under our control, in the clients and resource serves under our responsibility, so that we can concentrate on
the latter.

An _HTTP Stack_ is the whole of hardware networking equipment, hardware computing devices, operating system, hyper
visor, VM, container, user and account settings, browser, the configuration of all these components, such as firewall
and port settings, certificates, …, that exposes an _HTTP Semantics and Caching API_ to code under our control.

We discern

- an _HTTP Request Stack_ offering an _HTTP Client API_, and
- an _HTTP Request Handling Stack_, which calls code under our control that realizes an _HTTP Request Handling API_.

![HTTP client, resource server, & HTTP stack]

[HTTP Semantics]: https://datatracker.ietf.org/doc/html/rfc9110
[HTTP Caching]: https://datatracker.ietf.org/doc/html/rfc9111
[separated out]: https://datatracker.ietf.org/doc/html/rfc9110#name-history-and-evolution
[HTTP/1.1]: https://datatracker.ietf.org/doc/html/rfc9112
[HTTP/2]: https://datatracker.ietf.org/doc/html/rfc9113
[HTTP/3]: https://datatracker.ietf.org/doc/html/rfc9114
[RFC 9204]: https://datatracker.ietf.org/doc/html/rfc9204
[RFC 9218]: https://datatracker.ietf.org/doc/html/rfc9218
[HTTP client, resource server, & HTTP stack]: HTTP%20client%2C%20resource%20server%2C%20%26%20HTTP%20stack.png
