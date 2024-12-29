module.exports = [{
  script: 'dist/server.js',
  name: 'beta-back',
  exec_mode: 'fork',
  cron_restart: '05 00 * * *',
  max_memory_restart: '769M', // Configuración para reiniciar al alcanzar 769 MB de memoria
  node_args: '--max-old-space-size=769', // Limite de memória do Node.js para 769 MB
  watch: false
}]