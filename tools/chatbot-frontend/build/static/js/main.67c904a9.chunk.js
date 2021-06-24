(this['webpackJsonpchatbot-frontend'] = this['webpackJsonpchatbot-frontend'] || []).push([
	[0],
	{
		41: function (e, t, n) {},
		74: function (e, t, n) {},
		75: function (e, t, n) {
			'use strict';
			n.r(t);
			var c,
				r = n(1),
				a = n.n(r),
				i = n(35),
				o = n.n(i),
				s = (n(41), n(19)),
				u = n(8),
				l = n(0),
				d = function (e) {
					var t = e.message;
					return Object(l.jsx)(l.Fragment, {
						children:
							t.text &&
							Object(l.jsxs)('p', {
								children: [
									Object(l.jsxs)('time', {
										dateTime: new Date().toLocaleDateString('fi') + ' ' + new Date().toLocaleTimeString('fi'),
										children: [new Date().toLocaleDateString('fi') + ' ' + new Date().toLocaleTimeString('fi'), ' '],
									}),
									' ',
									t.text,
								],
							}),
					});
				},
				j = function (e) {
					var t = e.type,
						n = e.color,
						c = e.children,
						r = e.size;
					return Object(l.jsx)('button', { type: t, className: 'button button_' + n + ' ' + r, children: c });
				},
				b = function (e) {
					var t = e.type,
						n = e.label,
						c = e.required,
						a = e.disabled,
						i = e.name,
						o = e.changeHandler,
						s = Object(r.useState)(''),
						d = Object(u.a)(s, 2),
						j = d[0],
						b = d[1];
					return Object(l.jsxs)(l.Fragment, {
						children: [
							Object(l.jsx)('label', { htmlFor: i, children: n }),
							Object(l.jsx)('input', {
								id: i,
								type: t,
								className: 'input',
								onInput: function (e) {
									return (function (e) {
										o(e.target.value), b(e.target.value);
									})(e);
								},
								value: j,
								required: c,
								disabled: a,
							}),
						],
					});
				},
				f = function (e) {
					var t = e.setMessage,
						n = Object(r.useState)(''),
						c = Object(u.a)(n, 2),
						a = c[0],
						i = c[1];
					return Object(l.jsxs)('form', {
						onSubmit: function (e) {
							e.preventDefault(), t(a);
						},
						children: [
							Object(l.jsx)(b, { label: 'new message', name: 'message', type: 'text', changeHandler: i, required: !0 }),
							Object(l.jsx)(j, { color: 'primary', type: 'submit', size: 'md', children: 'Add' }),
						],
					});
				},
				m = n(36),
				h = n.n(m),
				O = function () {
					var e = Object(r.useState)([{ id: 0, text: '' }]),
						t = Object(u.a)(e, 2),
						n = t[0],
						a = t[1];
					Object(r.useEffect)(function () {
						var e, t;
						return (
							null ===
								(e = c =
									h()('http://127.0.0.1:8080', {
										withCredentials: !0,
										extraHeaders: { 'my-company': 'halkoliiteri.com' },
									})) ||
								void 0 === e ||
								e.on('add-message', function (e) {
									a(function (t) {
										return [].concat(Object(s.a)(t), [{ id: Date.now(), text: e }]);
									});
								}),
							null === (t = c) ||
								void 0 === t ||
								t.on('broadcast', function (e) {
									a(function (t) {
										return [].concat(Object(s.a)(t), [{ id: Date.now(), text: e }]);
									});
								}),
							function () {
								var e;
								return null === (e = c) || void 0 === e ? void 0 : e.disconnect();
							}
						);
					}, []);
					return Object(l.jsxs)(l.Fragment, {
						children: [
							n.map(function (e) {
								return Object(l.jsx)(d, { message: e }, e.id);
							}),
							Object(l.jsx)(f, {
								setMessage: function (e) {
									var t;
									null === (t = c) || void 0 === t || t.emit('new-message', { text: e });
								},
							}),
						],
					});
				},
				g =
					(n(74),
					function () {
						return Object(l.jsxs)(l.Fragment, {
							children: [Object(l.jsx)('h1', { children: 'Chatbot.io' }), Object(l.jsx)(O, {})],
						});
					}),
				x = function (e) {
					e &&
						e instanceof Function &&
						n
							.e(3)
							.then(n.bind(null, 76))
							.then(function (t) {
								var n = t.getCLS,
									c = t.getFID,
									r = t.getFCP,
									a = t.getLCP,
									i = t.getTTFB;
								n(e), c(e), r(e), a(e), i(e);
							});
				};
			o.a.render(Object(l.jsx)(a.a.StrictMode, { children: Object(l.jsx)(g, {}) }), document.getElementById('root')), x();
		},
	},
	[[75, 1, 2]],
]);
//# sourceMappingURL=main.67c904a9.chunk.js.map
