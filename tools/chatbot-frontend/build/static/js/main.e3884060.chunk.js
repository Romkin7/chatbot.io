(this['webpackJsonpchatbot-frontend'] = this['webpackJsonpchatbot-frontend'] || []).push([
	[0],
	{
		38: function (e, t, n) {},
		71: function (e, t, n) {},
		72: function (e, t, n) {
			'use strict';
			n.r(t);
			var a = n(1),
				c = n.n(a),
				r = n(32),
				s = n.n(r),
				i = (n(38), n(7)),
				u = n(0),
				j = function (e) {
					var t = e.message;
					return Object(u.jsxs)('p', {
						children: ["Today's date is: ", Object(u.jsx)('time', { dateTime: t.text, children: t.text })],
					});
				},
				b = function (e) {
					var t = e.type,
						n = e.label,
						a = e.required,
						c = e.disabled,
						r = e.name,
						s = e.changeHandler,
						i = e.value;
					return Object(u.jsxs)(u.Fragment, {
						children: [
							Object(u.jsx)('label', { htmlFor: r, children: n }),
							Object(u.jsx)('input', { id: r, type: t, className: 'input', onChange: s, value: i, required: a, disabled: c }),
						],
					});
				},
				o = function () {
					var e = Object(a.useState)({ value: '' }),
						t = Object(i.a)(e, 2),
						n = t[0],
						c = t[1];
					return Object(u.jsx)('form', {
						children: Object(u.jsx)(b, {
							label: 'new message',
							name: 'message',
							type: 'text',
							changeHandler: function (e) {
								return c(e.target.value);
							},
							required: !0,
							value: n.value,
						}),
					});
				},
				d = n(33),
				l = n.n(d);
			var O = function () {
					var e = Object(a.useState)(''),
						t = Object(i.a)(e, 2),
						n = (t[0], t[1], Object(a.useState)('')),
						c = Object(i.a)(n, 2),
						r = (c[0], c[1], Object(a.useState)('')),
						s = Object(i.a)(r, 2),
						b = (s[0], s[1], Object(a.useState)({ id: 0, text: '' })),
						d = Object(i.a)(b, 2),
						O = d[0],
						h = d[1],
						m = Object(a.useState)([]),
						f = Object(i.a)(m, 2),
						x = (f[0], f[1]),
						g = Object(a.useState)(0),
						v = Object(i.a)(g, 2);
					return (
						v[0],
						v[1],
						Object(a.useEffect)(function () {
							var e = l()('http://127.0.0.1:8080', {
								withCredentials: !0,
								extraHeaders: { 'my-company': 'halkoliiteri.com' },
							});
							e.on('add-message', function (e) {
								h({ id: 1, text: e });
							}),
								e.on('new-message', function (e) {
									x(e);
								});
						}, []),
						Object(u.jsxs)(u.Fragment, { children: [Object(u.jsx)(j, { message: O }), Object(u.jsx)(o, {})] })
					);
				},
				h =
					(n(71),
					function () {
						return Object(u.jsx)(u.Fragment, { children: Object(u.jsx)(O, {}) });
					}),
				m = function (e) {
					e &&
						e instanceof Function &&
						n
							.e(3)
							.then(n.bind(null, 73))
							.then(function (t) {
								var n = t.getCLS,
									a = t.getFID,
									c = t.getFCP,
									r = t.getLCP,
									s = t.getTTFB;
								n(e), a(e), c(e), r(e), s(e);
							});
				};
			s.a.render(Object(u.jsx)(c.a.StrictMode, { children: Object(u.jsx)(h, {}) }), document.getElementById('root')), m();
		},
	},
	[[72, 1, 2]],
]);
//# sourceMappingURL=main.e3884060.chunk.js.map
