(this['webpackJsonpchatbot-frontend'] = this['webpackJsonpchatbot-frontend'] || []).push([
	[0],
	{
		38: function (t, e, n) {},
		71: function (t, e, n) {},
		72: function (t, e, n) {
			'use strict';
			n.r(e);
			var c = n(6),
				r = n.n(c),
				i = n(31),
				o = n.n(i),
				s = (n(38), n(33)),
				a = n(32),
				j = n.n(a),
				u = n(0);
			var d = function () {
				var t = Object(c.useState)(''),
					e = Object(s.a)(t, 2),
					n = e[0],
					r = e[1];
				return (
					Object(c.useEffect)(function () {
						j()('http://127.0.0.1:8080', { withCredentials: !0, extraHeaders: { 'my-custom-header': 'abcd' } }).on(
							'FromAPI',
							function (t) {
								r(t);
							},
						);
					}, []),
					Object(u.jsxs)('p', { children: ["It's ", Object(u.jsx)('time', { dateTime: n, children: n })] })
				);
			};
			n(71);
			var b = function () {
					return Object(u.jsxs)(u.Fragment, {
						children: [Object(u.jsx)('header', {}), Object(u.jsx)('main', { children: Object(u.jsx)(d, {}) })],
					});
				},
				h = function (t) {
					t &&
						t instanceof Function &&
						n
							.e(3)
							.then(n.bind(null, 73))
							.then(function (e) {
								var n = e.getCLS,
									c = e.getFID,
									r = e.getFCP,
									i = e.getLCP,
									o = e.getTTFB;
								n(t), c(t), r(t), i(t), o(t);
							});
				};
			o.a.render(Object(u.jsx)(r.a.StrictMode, { children: Object(u.jsx)(b, {}) }), document.getElementById('root')), h();
		},
	},
	[[72, 1, 2]],
]);
//# sourceMappingURL=main.358794e8.chunk.js.map
