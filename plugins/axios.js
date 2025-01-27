import createRepository from '~/api/repository'
export default (ctx, inject) => {
  // And in the Vue instances (this.$repository in your components)
  const repositoryWithAxios = createRepository(ctx.$axios)
  inject('jobRepository', repositoryWithAxios('/job-offers'))
  inject('accountRepository', {
    create(payload) {
      return ctx.$axios.$post('company/registration', payload)
    },
    auth(payload) {
      return ctx.$axios.$post('login/check', payload)
    },
  })
}
