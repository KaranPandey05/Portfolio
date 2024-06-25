import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {

  return `         
          _nnnn_                      
        dGGGGMMb     ,"""""""""""""".  sumfetch: summary display
       @p~qp~~qMb    | Linux Rules! | -----------
       M|@||@) M|   _;..............'  ABOUT
       @,----.JM| -'                   ${config.name}
      JS^\__/  qKL                     ﰩ ${config.ps1_hostname}
     dZP        qKRb                   <u><a href="${config.resume_url}" target="_blank">resume</a></u>
    dZP          qKKb                 -----------
   fZP            SMMb                 CONTACT
   HZM            MMMM                 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
   FqM            MMMM                 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
 __| ".        |\dS"qML                 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
 |    '.       | '' \Zq
_)      \.___.,|     .'
\____   )MMMMMM|   .'
     '-'       '--' hjm`;
}

export default sumfetch;
