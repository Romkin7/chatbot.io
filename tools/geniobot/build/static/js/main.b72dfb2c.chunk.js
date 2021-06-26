(this.webpackJsonpgeniobot = this.webpackJsonpgeniobot || []).push([
	[0],
	{
		41: function (e, t, n) {},
		74: function (e, t, n) {},
		75: function (e, t, n) {
			'use strict';
			n.r(t);
			var c,
				i = n(1),
				r = n.n(i),
				a = n(35),
				o = n.n(a),
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
						i = e.size;
					return Object(l.jsx)('button', { type: t, className: 'button button_' + n + ' ' + i, children: c });
				},
				b = function (e) {
					var t = e.type,
						n = e.label,
						c = e.required,
						r = e.disabled,
						a = e.name,
						o = e.changeHandler,
						s = Object(i.useState)(''),
						d = Object(u.a)(s, 2),
						j = d[0],
						b = d[1];
					return Object(l.jsxs)(l.Fragment, {
						children: [
							Object(l.jsx)('label', { htmlFor: a, children: n }),
							Object(l.jsx)('input', {
								id: a,
								type: t,
								className: 'input',
								onInput: function (e) {
									return (function (e) {
										o(e.target.value), b(e.target.value);
									})(e);
								},
								value: j,
								required: c,
								disabled: r,
							}),
						],
					});
				},
				f = function (e) {
					var t = e.setMessage,
						n = Object(i.useState)(''),
						c = Object(u.a)(n, 2),
						r = c[0],
						a = c[1];
					return Object(l.jsxs)('form', {
						onSubmit: function (e) {
							e.preventDefault(), t(r);
						},
						children: [
							Object(l.jsx)(b, { label: 'new message', name: 'message', type: 'text', changeHandler: a, required: !0 }),
							Object(l.jsx)(j, { color: 'primary', type: 'submit', size: 'md', children: 'Add' }),
						],
					});
				},
				m = n(36),
				g = n.n(m),
				O = function () {
					var e = Object(i.useState)([{ id: 0, text: '' }]),
						t = Object(u.a)(e, 2),
						n = t[0],
						r = t[1];
					Object(i.useEffect)(function () {
						var e, t;
						return (
							null ===
								(e = c =
									g()('http://127.0.0.1:8080', {
										withCredentials: !0,
										extraHeaders: { 'my-company': 'halkoliiteri.com' },
									})) ||
								void 0 === e ||
								e.on('add-message', function (e) {
									r(function (t) {
										return [].concat(Object(s.a)(t), [{ id: Date.now(), text: e }]);
									});
								}),
							null === (t = c) ||
								void 0 === t ||
								t.on('broadcast', function (e) {
									r(function (t) {
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
				h =
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
									i = t.getFCP,
									r = t.getLCP,
									a = t.getTTFB;
								n(e), c(e), i(e), r(e), a(e);
							});
				};
			o.a.render(Object(l.jsx)(r.a.StrictMode, { children: Object(l.jsx)(h, {}) }), document.getElementById('root')), x();
		},
	},
	[[75, 1, 2]],
]);
//# sourceMappingURL=main.b72dfb2c.chunk.js.map
