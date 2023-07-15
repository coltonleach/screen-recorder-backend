let e, t
var r,
  o,
  n,
  i = {},
  a = (function (e) {
    'use strict'
    var t,
      r = Object.prototype,
      o = r.hasOwnProperty,
      n =
        Object.defineProperty ||
        function (e, t, r) {
          e[t] = r.value
        },
      i = 'function' == typeof Symbol ? Symbol : {},
      a = i.iterator || '@@iterator',
      s = i.asyncIterator || '@@asyncIterator',
      c = i.toStringTag || '@@toStringTag'
    function l(e, t, r) {
      return (
        Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        e[t]
      )
    }
    try {
      l({}, '')
    } catch (e) {
      l = function (e, t, r) {
        return (e[t] = r)
      }
    }
    function f(e, r, o, i) {
      var a,
        s,
        c = Object.create((r && r.prototype instanceof g ? r : g).prototype)
      return (
        n(c, '_invoke', {
          value:
            ((a = new k(i || [])),
            (s = p),
            function (r, n) {
              if (s === d) throw Error('Generator is already running')
              if (s === m) {
                if ('throw' === r) throw n
                return T()
              }
              for (a.method = r, a.arg = n; ; ) {
                var i = a.delegate
                if (i) {
                  var c = (function e(r, o) {
                    var n = o.method,
                      i = r.iterator[n]
                    if (i === t)
                      return (
                        (o.delegate = null),
                        ('throw' === n &&
                          r.iterator.return &&
                          ((o.method = 'return'),
                          (o.arg = t),
                          e(r, o),
                          'throw' === o.method)) ||
                          ('return' !== n &&
                            ((o.method = 'throw'),
                            (o.arg = TypeError(
                              "The iterator does not provide a '" +
                                n +
                                "' method"
                            )))),
                        h
                      )
                    var a = u(i, r.iterator, o.arg)
                    if ('throw' === a.type)
                      return (
                        (o.method = 'throw'),
                        (o.arg = a.arg),
                        (o.delegate = null),
                        h
                      )
                    var s = a.arg
                    return s
                      ? s.done
                        ? ((o[r.resultName] = s.value),
                          (o.next = r.nextLoc),
                          'return' !== o.method &&
                            ((o.method = 'next'), (o.arg = t)),
                          (o.delegate = null),
                          h)
                        : s
                      : ((o.method = 'throw'),
                        (o.arg = TypeError('iterator result is not an object')),
                        (o.delegate = null),
                        h)
                  })(i, a)
                  if (c) {
                    if (c === h) continue
                    return c
                  }
                }
                if ('next' === a.method) a.sent = a._sent = a.arg
                else if ('throw' === a.method) {
                  if (s === p) throw ((s = m), a.arg)
                  a.dispatchException(a.arg)
                } else 'return' === a.method && a.abrupt('return', a.arg)
                s = d
                var l = u(e, o, a)
                if ('normal' === l.type) {
                  if (((s = a.done ? m : 'suspendedYield'), l.arg === h))
                    continue
                  return { value: l.arg, done: a.done }
                }
                'throw' === l.type &&
                  ((s = m), (a.method = 'throw'), (a.arg = l.arg))
              }
            }),
        }),
        c
      )
    }
    function u(e, t, r) {
      try {
        return { type: 'normal', arg: e.call(t, r) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    e.wrap = f
    var p = 'suspendedStart',
      d = 'executing',
      m = 'completed',
      h = {}
    function g() {}
    function y() {}
    function w() {}
    var b = {}
    l(b, a, function () {
      return this
    })
    var v = Object.getPrototypeOf,
      F = v && v(v(P([])))
    F && F !== r && o.call(F, a) && (b = F)
    var E = (w.prototype = g.prototype = Object.create(b))
    function L(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        l(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function j(e, t) {
      var r
      n(this, '_invoke', {
        value: function (n, i) {
          function a() {
            return new t(function (r, a) {
              !(function r(n, i, a, s) {
                var c = u(e[n], e, i)
                if ('throw' === c.type) s(c.arg)
                else {
                  var l = c.arg,
                    f = l.value
                  return f && 'object' == typeof f && o.call(f, '__await')
                    ? t.resolve(f.__await).then(
                        function (e) {
                          r('next', e, a, s)
                        },
                        function (e) {
                          r('throw', e, a, s)
                        }
                      )
                    : t.resolve(f).then(
                        function (e) {
                          ;(l.value = e), a(l)
                        },
                        function (e) {
                          return r('throw', e, a, s)
                        }
                      )
                }
              })(n, i, r, a)
            })
          }
          return (r = r ? r.then(a, a) : a())
        },
      })
    }
    function x(e) {
      var t = { tryLoc: e[0] }
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t)
    }
    function _(e) {
      var t = e.completion || {}
      ;(t.type = 'normal'), delete t.arg, (e.completion = t)
    }
    function k(e) {
      ;(this.tryEntries = [{ tryLoc: 'root' }]),
        e.forEach(x, this),
        this.reset(!0)
    }
    function P(e) {
      if (e) {
        var r = e[a]
        if (r) return r.call(e)
        if ('function' == typeof e.next) return e
        if (!isNaN(e.length)) {
          var n = -1,
            i = function r() {
              for (; ++n < e.length; )
                if (o.call(e, n)) return (r.value = e[n]), (r.done = !1), r
              return (r.value = t), (r.done = !0), r
            }
          return (i.next = i)
        }
      }
      return { next: T }
    }
    function T() {
      return { value: t, done: !0 }
    }
    return (
      (y.prototype = w),
      n(E, 'constructor', { value: w, configurable: !0 }),
      n(w, 'constructor', { value: y, configurable: !0 }),
      (y.displayName = l(w, c, 'GeneratorFunction')),
      (e.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return (
          !!t && (t === y || 'GeneratorFunction' === (t.displayName || t.name))
        )
      }),
      (e.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, w)
            : ((e.__proto__ = w), l(e, c, 'GeneratorFunction')),
          (e.prototype = Object.create(E)),
          e
        )
      }),
      (e.awrap = function (e) {
        return { __await: e }
      }),
      L(j.prototype),
      l(j.prototype, s, function () {
        return this
      }),
      (e.AsyncIterator = j),
      (e.async = function (t, r, o, n, i) {
        void 0 === i && (i = Promise)
        var a = new j(f(t, r, o, n), i)
        return e.isGeneratorFunction(r)
          ? a
          : a.next().then(function (e) {
              return e.done ? e.value : a.next()
            })
      }),
      L(E),
      l(E, c, 'Generator'),
      l(E, a, function () {
        return this
      }),
      l(E, 'toString', function () {
        return '[object Generator]'
      }),
      (e.keys = function (e) {
        var t = Object(e),
          r = []
        for (var o in t) r.push(o)
        return (
          r.reverse(),
          function e() {
            for (; r.length; ) {
              var o = r.pop()
              if (o in t) return (e.value = o), (e.done = !1), e
            }
            return (e.done = !0), e
          }
        )
      }),
      (e.values = P),
      (k.prototype = {
        constructor: k,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(_),
            !e)
          )
            for (var r in this)
              't' === r.charAt(0) &&
                o.call(this, r) &&
                !isNaN(+r.slice(1)) &&
                (this[r] = t)
        },
        stop: function () {
          this.done = !0
          var e = this.tryEntries[0].completion
          if ('throw' === e.type) throw e.arg
          return this.rval
        },
        dispatchException: function (e) {
          if (this.done) throw e
          var r = this
          function n(o, n) {
            return (
              (s.type = 'throw'),
              (s.arg = e),
              (r.next = o),
              n && ((r.method = 'next'), (r.arg = t)),
              !!n
            )
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              s = a.completion
            if ('root' === a.tryLoc) return n('end')
            if (a.tryLoc <= this.prev) {
              var c = o.call(a, 'catchLoc'),
                l = o.call(a, 'finallyLoc')
              if (c && l) {
                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
              } else if (c) {
                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
              } else if (l) {
                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
              } else throw Error('try statement without catch or finally')
            }
          }
        },
        abrupt: function (e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var n = this.tryEntries[r]
            if (
              n.tryLoc <= this.prev &&
              o.call(n, 'finallyLoc') &&
              this.prev < n.finallyLoc
            ) {
              var i = n
              break
            }
          }
          i &&
            ('break' === e || 'continue' === e) &&
            i.tryLoc <= t &&
            t <= i.finallyLoc &&
            (i = null)
          var a = i ? i.completion : {}
          return ((a.type = e), (a.arg = t), i)
            ? ((this.method = 'next'), (this.next = i.finallyLoc), h)
            : this.complete(a)
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
              ? ((this.rval = this.arg = e.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : 'normal' === e.type && t && (this.next = t),
            h
          )
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t]
            if (r.finallyLoc === e)
              return this.complete(r.completion, r.afterLoc), _(r), h
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t]
            if (r.tryLoc === e) {
              var o = r.completion
              if ('throw' === o.type) {
                var n = o.arg
                _(r)
              }
              return n
            }
          }
          throw Error('illegal catch attempt')
        },
        delegateYield: function (e, r, o) {
          return (
            (this.delegate = { iterator: P(e), resultName: r, nextLoc: o }),
            'next' === this.method && (this.arg = t),
            h
          )
        },
      }),
      e
    )
  })({})
try {
  regeneratorRuntime = a
} catch (e) {
  'object' == typeof globalThis
    ? (globalThis.regeneratorRuntime = a)
    : Function('r', 'regeneratorRuntime = r')(a)
}
var s = {},
  c = {},
  l = (c = {
    defaultArgs: ['./ffmpeg', '-nostdin', '-y'],
    baseOptions: {
      log: !1,
      logger: () => {},
      progress: () => {},
      corePath: '',
    },
  }).defaultArgs,
  f = c.baseOptions,
  u = {}
u = (e, t) => {
  let r = e._malloc(t.length * Uint32Array.BYTES_PER_ELEMENT)
  return (
    t.forEach((t, o) => {
      let n = e.lengthBytesUTF8(t) + 1,
        i = e._malloc(n)
      e.stringToUTF8(t, i, n),
        e.setValue(r + Uint32Array.BYTES_PER_ELEMENT * o, i, 'i32')
    }),
    [t.length, r]
  )
}
var p = {}
p = JSON.parse(
  '{"name":"@ffmpeg/ffmpeg","version":"0.11.6","description":"FFmpeg WebAssembly version","main":"src/index.js","types":"src/index.d.ts","directories":{"example":"examples"},"scripts":{"start":"node scripts/server.js","start:worker":"node scripts/worker-server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","build:worker":"rimraf dist && webpack --config scripts/webpack.config.worker.prod.js","prepublishOnly":"npm run build","lint":"eslint src","wait":"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node node_modules/mocha/bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},"browser":{"./src/node/index.js":"./src/browser/index.js"},"repository":{"type":"git","url":"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},"keywords":["ffmpeg","WebAssembly","video"],"author":"Jerome Wu <jeromewus@gmail.com>","license":"MIT","bugs":{"url":"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},"engines":{"node":">=12.16.1"},"homepage":"https://github.com/ffmpegwasm/ffmpeg.wasm#readme","dependencies":{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},"devDependencies":{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.11.0","@types/emscripten":"^1.39.4","babel-eslint":"^10.1.0","babel-loader":"^8.1.0","chai":"^4.2.0","cors":"^2.8.5","eslint":"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1","express":"^4.17.1","mocha":"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0","webpack":"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"}}'
)
var d = {}
function m() {
  throw Error('setTimeout has not been defined')
}
function h() {
  throw Error('clearTimeout has not been defined')
}
function g(e) {
  if (r === setTimeout) return setTimeout(e, 0)
  if ((r === m || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0)
  try {
    return r(e, 0)
  } catch (t) {
    try {
      return r.call(null, e, 0)
    } catch (t) {
      return r.call(this, e, 0)
    }
  }
}
!(function () {
  try {
    r = 'function' == typeof setTimeout ? setTimeout : m
  } catch (e) {
    r = m
  }
  try {
    o = 'function' == typeof clearTimeout ? clearTimeout : h
  } catch (e) {
    o = h
  }
})()
var y = [],
  w = !1,
  b = -1
function v() {
  w && n && ((w = !1), n.length ? (y = n.concat(y)) : (b = -1), y.length && F())
}
function F() {
  if (!w) {
    var e = g(v)
    w = !0
    for (var t = y.length; t; ) {
      for (n = y, y = []; ++b < t; ) n && n[b].run()
      ;(b = -1), (t = y.length)
    }
    ;(n = null),
      (w = !1),
      (function (e) {
        if (o === clearTimeout) return clearTimeout(e)
        if ((o === h || !o) && clearTimeout)
          return (o = clearTimeout), clearTimeout(e)
        try {
          o(e)
        } catch (t) {
          try {
            return o.call(null, e)
          } catch (t) {
            return o.call(this, e)
          }
        }
      })(e)
  }
}
function E(e, t) {
  ;(this.fun = e), (this.array = t)
}
function L() {}
;(d.nextTick = function (e) {
  var t = Array(arguments.length - 1)
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
  y.push(new E(e, t)), 1 !== y.length || w || g(F)
}),
  (E.prototype.run = function () {
    this.fun.apply(null, this.array)
  }),
  (d.title = 'browser'),
  (d.browser = !0),
  (d.env = {}),
  (d.argv = []),
  (d.version = ''),
  (d.versions = {}),
  (d.on = L),
  (d.addListener = L),
  (d.once = L),
  (d.off = L),
  (d.removeListener = L),
  (d.removeAllListeners = L),
  (d.emit = L),
  (d.prependListener = L),
  (d.prependOnceListener = L),
  (d.listeners = function (e) {
    return []
  }),
  (d.binding = function (e) {
    throw Error('process.binding is not supported')
  }),
  (d.cwd = function () {
    return '/'
  }),
  (d.chdir = function (e) {
    throw Error('process.chdir is not supported')
  }),
  (d.umask = function () {
    return 0
  })
const j = `https://unpkg.com/@ffmpeg/core@${(function (e) {
  return e && e.__esModule ? e.default : e
})(p).devDependencies['@ffmpeg/core'].substring(1)}/dist/ffmpeg-core.js`
var x = {}
let _ = !1,
  k = () => {}
x = {
  logging: !1,
  setLogging: (e) => {
    _ = e
  },
  setCustomLogger: (e) => {
    k = e
  },
  log: (e, t) => {
    k({ type: e, message: t }), _ && console.log(`[${e}] ${t}`)
  },
}
var P = {}
P = {
  CREATE_FFMPEG_CORE_IS_NOT_DEFINED: (e) => `
createFFmpegCore is not defined. ffmpeg.wasm is unable to find createFFmpegCore after loading ffmpeg-core.js from ${e}. Use another URL when calling createFFmpeg():

const ffmpeg = createFFmpeg({
  corePath: 'http://localhost:3000/ffmpeg-core.js',
});
`,
}
const T = async (e, t) => {
    ;(0, x.log)('info', `fetch ${e}`)
    let r = await (await fetch(e)).arrayBuffer()
    ;(0, x.log)('info', `${e} file size = ${r.byteLength} bytes`)
    let o = new Blob([r], { type: t }),
      n = URL.createObjectURL(o)
    return (0, x.log)('info', `${e} blob URL = ${n}`), n
  },
  S = async ({ corePath: e, workerPath: t, wasmPath: r }) => {
    if (
      'undefined' != typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope
    ) {
      if ('string' != typeof e) throw Error('corePath should be a string!')
      let o = new URL(
          e,
          'file:///node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js'
        ).href,
        n = await T(o, 'application/javascript'),
        i = await T(
          void 0 !== r ? r : o.replace('ffmpeg-core.js', 'ffmpeg-core.wasm'),
          'application/wasm'
        ),
        a = await T(
          void 0 !== t
            ? t
            : o.replace('ffmpeg-core.js', 'ffmpeg-core.worker.js'),
          'application/javascript'
        )
      return 'undefined' == typeof createFFmpegCore
        ? new Promise((e) => {
            if (
              (globalThis.importScripts(n),
              'undefined' == typeof createFFmpegCore)
            )
              throw Error((0, P.CREATE_FFMPEG_CORE_IS_NOT_DEFINED)(o))
            ;(0, x.log)('info', 'ffmpeg-core.js script loaded'),
              e({
                createFFmpegCore: createFFmpegCore,
                corePath: n,
                wasmPath: i,
                workerPath: a,
              })
          })
        : ((0, x.log)('info', 'ffmpeg-core.js script is loaded already'),
          Promise.resolve({
            createFFmpegCore: createFFmpegCore,
            corePath: n,
            wasmPath: i,
            workerPath: a,
          }))
    }
    if ('string' != typeof e) throw Error('corePath should be a string!')
    let o = new URL(
        e,
        'file:///node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js'
      ).href,
      n = await T(o, 'application/javascript'),
      i = await T(
        void 0 !== r ? r : o.replace('ffmpeg-core.js', 'ffmpeg-core.wasm'),
        'application/wasm'
      ),
      a = await T(
        void 0 !== t ? t : o.replace('ffmpeg-core.js', 'ffmpeg-core.worker.js'),
        'application/javascript'
      )
    return 'undefined' == typeof createFFmpegCore
      ? new Promise((e) => {
          let t = document.createElement('script'),
            r = () => {
              if (
                (t.removeEventListener('load', r),
                'undefined' == typeof createFFmpegCore)
              )
                throw Error((0, P.CREATE_FFMPEG_CORE_IS_NOT_DEFINED)(o))
              ;(0, x.log)('info', 'ffmpeg-core.js script loaded'),
                e({
                  createFFmpegCore: createFFmpegCore,
                  corePath: n,
                  wasmPath: i,
                  workerPath: a,
                })
            }
          ;(t.src = n),
            (t.type = 'text/javascript'),
            t.addEventListener('load', r),
            document.getElementsByTagName('head')[0].appendChild(t)
        })
      : ((0, x.log)('info', 'ffmpeg-core.js script is loaded already'),
        Promise.resolve({
          createFFmpegCore: createFFmpegCore,
          corePath: n,
          wasmPath: i,
          workerPath: a,
        }))
  },
  A = (e) =>
    new Promise((t, r) => {
      let o = new FileReader()
      ;(o.onload = () => {
        t(o.result)
      }),
        (o.onerror = ({
          target: {
            error: { code: e },
          },
        }) => {
          r(Error(`File could not be read! Code=${e}`))
        }),
        o.readAsArrayBuffer(e)
    }),
  C = async (e) => {
    let t = e
    if (void 0 === e) return new Uint8Array()
    if ('string' == typeof e) {
      if (/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e))
        t = atob(e.split(',')[1])
          .split('')
          .map((e) => e.charCodeAt(0))
      else {
        let r = await fetch(
          new URL(
            e,
            'file:///node_modules/@ffmpeg/ffmpeg/src/browser/fetchFile.js'
          ).href
        )
        t = await r.arrayBuffer()
      }
    } else (e instanceof File || e instanceof Blob) && (t = await A(e))
    return new Uint8Array(t)
  }
var O = { corePath: j },
  R = p.version
const U = Error(
  'ffmpeg.wasm is not ready, make sure you have completed load().'
)
i = {
  createFFmpeg: (e = {}) => {
    let { log: t, logger: r, progress: o, ...n } = { ...f, ...O, ...e },
      i = null,
      a = null,
      s = null,
      c = null,
      p = !1,
      d = () => {},
      m = t,
      h = o,
      g = 0,
      y = 0,
      w = !1,
      b = 0,
      v = (e) => {
        'FFMPEG_END' === e &&
          null !== s &&
          (s(), (s = null), (c = null), (p = !1))
      },
      F = (e, t) => {
        d({ type: e, message: t }), m && console.log(`[${e}] ${t}`)
      },
      E = (e) => {
        let [t, r, o] = e.split(':')
        return 3600 * parseFloat(t) + 60 * parseFloat(r) + parseFloat(o)
      },
      L = (e, t) => {
        if ('string' == typeof e) {
          if (e.startsWith('  Duration')) {
            let r = e.split(', ')[0].split(': ')[1],
              o = E(r)
            t({ duration: o, ratio: b }),
              (0 === g || g > o) && ((g = o), (w = !0))
          } else if (w && e.startsWith('    Stream')) {
            let t = e.match(/([\d.]+) fps/)
            if (t) {
              let e = parseFloat(t[1])
              y = g * e
            } else y = 0
            w = !1
          } else if (e.startsWith('frame') || e.startsWith('size')) {
            let r = e.split('time=')[1].split(' ')[0],
              o = E(r),
              n = e.match(/frame=\s*(\d+)/)
            if (y && n) {
              let e = parseFloat(n[1])
              b = Math.min(e / y, 1)
            } else b = o / g
            t({ ratio: b, time: o })
          } else e.startsWith('video:') && (t({ ratio: 1 }), (g = 0))
        }
      },
      j = ({ type: e, message: t }) => {
        F(e, t), L(t, h), v(t)
      },
      x = async () => {
        if ((F('info', 'load ffmpeg-core'), null === i)) {
          F('info', 'loading ffmpeg-core')
          let {
            createFFmpegCore: e,
            corePath: t,
            workerPath: r,
            wasmPath: o,
          } = await S(n)
          ;(a = (i = await e({
            mainScriptUrlOrBlob: t,
            printErr: (e) => j({ type: 'fferr', message: e }),
            print: (e) => j({ type: 'ffout', message: e }),
            locateFile: (e, t) => {
              if (
                'undefined' != typeof window ||
                'undefined' != typeof WorkerGlobalScope
              ) {
                if (void 0 !== o && e.endsWith('ffmpeg-core.wasm')) return o
                if (void 0 !== r && e.endsWith('ffmpeg-core.worker.js'))
                  return r
              }
              return t + e
            },
          })).cwrap(n.mainName || 'proxy_main', 'number', [
            'number',
            'number',
          ])),
            F('info', 'ffmpeg-core loaded')
        } else
          throw Error(
            'ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.'
          )
      }
    return (
      F('info', `use ffmpeg.wasm v${R}`),
      {
        setProgress: (e) => {
          h = e
        },
        setLogger: (e) => {
          d = e
        },
        setLogging: (e) => {
          m = e
        },
        load: x,
        isLoaded: () => null !== i,
        run: (...e) => {
          if ((F('info', `run ffmpeg command: ${e.join(' ')}`), null === i))
            throw U
          if (!p)
            return (
              (p = !0),
              new Promise((t, r) => {
                let o = [...l, ...e].filter((e) => 0 !== e.length)
                ;(s = t), (c = r), a(...u(i, o))
              })
            )
          throw Error('ffmpeg.wasm can only run one command at a time')
        },
        exit: () => {
          if (null === i) throw U
          c && c('ffmpeg has exited'), (p = !1)
          try {
            i.exit(1)
          } catch (e) {
            F(e.message), c && c(e)
          } finally {
            ;(i = null), (a = null), (s = null), (c = null)
          }
        },
        FS: (e, ...t) => {
          if (
            (F(
              'info',
              `run FS.${e} ${t
                .map((e) =>
                  'string' == typeof e ? e : `<${e.length} bytes binary file>`
                )
                .join(' ')}`
            ),
            null === i)
          )
            throw U
          {
            let r = null
            try {
              r = i.FS[e](...t)
            } catch (r) {
              if ('readdir' === e)
                throw Error(
                  `ffmpeg.FS('readdir', '${t[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`
                )
              if ('readFile' === e)
                throw Error(
                  `ffmpeg.FS('readFile', '${t[0]}') error. Check if the path exists`
                )
              throw Error('Oops, something went wrong in FS operation.')
            }
            return r
          }
        },
      }
    )
  },
  fetchFile: C,
}
const N = document.querySelector('#btn-start-record'),
  $ = document.querySelector('#btn-stop-record'),
  G = document.querySelector('#btn-merge'),
  B = document.querySelector('#btn-preview'),
  D = document.querySelector('#btn-download-video'),
  M = document.querySelector('#btn-download-audio'),
  W = document.querySelector('#btn-download-merge'),
  q = document.querySelector('#btn-download-more'),
  I = document.querySelector('#my-recording'),
  Y = document.querySelector('#my-audio')
let z = !1
const J = (0, i.createFFmpeg)({ log: !0 }),
  V = async () => {
    await J.load(),
      N.removeAttribute('disabled'),
      $.setAttribute('disabled', 'disabled'),
      G.setAttribute('disabled', 'disabled'),
      B.setAttribute('disabled', 'disabled')
  }
N.addEventListener('click', async (r) => {
  let o = !0
  if (
    (I.src &&
      (o = confirm(
        'Starting a new recording will overwrite your existing video and audio, are you sure you want to continue?'
      )),
    o)
  )
    try {
      let r = await navigator.mediaDevices.getUserMedia({
          video: !1,
          audio: !0,
        }),
        o = await navigator.mediaDevices.getDisplayMedia({
          video: { mediaSource: 'screen' },
          audio: { sampleRate: 44100 },
          surfaceSwitching: 'include',
          selfBrowserSurface: 'exclude',
          systemAudio: 'include',
        })
      N.setAttribute('disabled', 'disabled')
      let n = []
      e = new MediaRecorder(o)
      let i = []
      ;(t = new MediaRecorder(r)),
        (e.ondataavailable = (e) => {
          n.push(e.data)
        }),
        (t.ondataavailable = (e) => {
          i.push(e.data)
        }),
        e.start(),
        t.start(),
        setTimeout(() => {
          e.stop(), t.stop()
        }, 1e4),
        (e.onstop = () => {
          t.stop(),
            (I.src = URL.createObjectURL(new Blob(n, { type: n[0].type }))),
            (D.href = I.src)
        }),
        (t.onstop = () => {
          ;(Y.src = URL.createObjectURL(new Blob(i, { type: i[0].type }))),
            (M.href = Y.src),
            G.removeAttribute('disabled'),
            N.removeAttribute('disabled'),
            B.removeAttribute('disabled'),
            q.removeAttribute('disabled'),
            M.setAttribute('aria-disabled', 'false'),
            D.setAttribute('aria-disabled', 'false')
        }),
        $.removeAttribute('disabled')
    } catch (e) {
      console.error(e)
    }
}),
  G.addEventListener('click', async (e) => {
    J.FS('writeFile', 'video.webm', await (0, i.fetchFile)(I.src)),
      J.FS('writeFile', 'audio.ogg', await (0, i.fetchFile)(Y.src)),
      await J.run(
        '-i',
        'video.webm',
        '-i',
        'audio.ogg',
        '-c:v',
        'libx264',
        '-c:a',
        'copy',
        'output.mp4'
      )
    let t = J.FS('readFile', 'output.mp4'),
      r = URL.createObjectURL(new Blob([t.buffer], { type: 'video/mp4' }))
    ;(W.href = r), G.setAttribute('aria-disabled', 'false')
  }),
  $.addEventListener('click', (r) => {
    e.stop(), t.stop()
  }),
  B.addEventListener('click', () => {
    z
      ? (I.pause(), Y.pause(), (z = !1))
      : ((I.currentTime = 0), (Y.currentTime = 0), I.play(), Y.play(), (z = !0))
  }),
  V()
//# sourceMappingURL=index.514b4ec7.js.map
