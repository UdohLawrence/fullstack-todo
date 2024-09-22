import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/register', (ctx) => {
  return ctx.view.render('pages/auth/register')
})
