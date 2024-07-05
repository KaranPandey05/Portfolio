// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import { getProjects } from '../api';
import React from 'react';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += "- " + Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += "- " + Object.keys(bin).sort()[i - 1] + '\n';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}.

As second year Electrical Engineering student at the University of British Columbia. I have a passion for creating innovative solutions through practical projects and technical skills. 
My expertise spans across CAD tools like SolidWorks, AutoCAD, and a bit of KiCad, as well as programming languages including C++, Python, and Arduino. My GitHub showcases my hands-on projects 
like an AI-Aimbot for Minecraft utilizing machine learning. I am deeply interested in low-level computer design, including microcontrollers, FPGAs, and ASICs. My goal is to contribute to 
GPU and CPU design, and I am currently focused on developing a hardware accelerator using an FPGA development board to enhance ML model performance. I thrive on applying my knowledge to 
real-world challenges, pushing the boundaries of what's possible in technology and engineering.

More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'github' - my github profile.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};


// Contact
export const email = async (args: string[]): Promise<string> => {
  return `You can email me at: ${config.email}`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `projects\nresume\ngithub\nlinkedin\nabout\n`;
};


export const cd = async (args: string[]): Promise<string> => {
  const dir = args.join(' ').toLowerCase();
  let currentDirectory = 'root';

  if (dir === '..') {
    if (currentDirectory === 'root') {
      return 'Already at the root directory';
    } else {
      currentDirectory = 'root';
      return 'Moved to root directory';
    }
  } else if (currentDirectory !== 'root') {
    return `Please type '..' to go back to the root before opening another directory.`;
  }

  if (dir === 'projects') {
    const projects = await getProjects();
    return projects
      .map(
        (repo) =>
          `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
      )
      .join('\n');
  } else if (dir === 'resume') {
    window.open(`${config.resume_url}`);
    return 'Opening resume...';
  } else if (dir === 'github') {
    currentDirectory = 'github';
    window.open(`https://github.com/${config.social.github}/`);
    return 'Opening github...';
  } else if (dir === 'linkedin') {
    currentDirectory = 'linkedin';
    window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
    return 'Opening linkedin...';
  } else if (dir === 'about') {
    currentDirectory = 'about';
    return `Hi, I am ${config.name}.

As second year Electrical Engineering student at the University of British Columbia. I have a passion for creating innovative solutions through practical projects and technical skills. 
My expertise spans across CAD tools like SolidWorks, AutoCAD, and a bit of KiCad, as well as programming languages including C++, Python, and Arduino. My GitHub showcases my hands-on projects 
like an AI-Aimbot for Minecraft utilizing machine learning. I am deeply interested in low-level computer design, including microcontrollers, FPGAs, and ASICs. My goal is to contribute to 
GPU and CPU design, and I am currently focused on developing a hardware accelerator using an FPGA development board to enhance ML model performance. I thrive on applying my knowledge to 
real-world challenges, pushing the boundaries of what's possible in technology and engineering.
    
More about me:
'cd resume' - my latest resume.
'cd github' - my github profile.
'cd linkedin' - my linkedin profile.`
  } else {
    return `shell: directory not found: ${args[0]}. Try 'ls' to list all available directories.`;
  }
};


export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};


export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 █████   ████                                             ███████████                           █████                    
░░███   ███░                                             ░░███░░░░░███                         ░░███                     
 ░███  ███     ██████   ████████   ██████   ████████      ░███    ░███  ██████   ████████    ███████   ██████  █████ ████
 ░███████     ░░░░░███ ░░███░░███ ░░░░░███ ░░███░░███     ░██████████  ░░░░░███ ░░███░░███  ███░░███  ███░░███░░███ ░███ 
 ░███░░███     ███████  ░███ ░░░   ███████  ░███ ░███     ░███░░░░░░    ███████  ░███ ░███ ░███ ░███ ░███████  ░███ ░███ 
 ░███ ░░███   ███░░███  ░███      ███░░███  ░███ ░███     ░███         ███░░███  ░███ ░███ ░███ ░███ ░███░░░   ░███ ░███ 
 █████ ░░████░░████████ █████    ░░████████ ████ █████    █████       ░░████████ ████ █████░░████████░░██████  ░░███████ 
░░░░░   ░░░░  ░░░░░░░░ ░░░░░      ░░░░░░░░ ░░░░ ░░░░░    ░░░░░         ░░░░░░░░ ░░░░ ░░░░░  ░░░░░░░░  ░░░░░░    ░░░░░███ 
                                                                                                                ███ ░███ 
                                                                                                               ░░██████  
                                                                                                                ░░░░░░   
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
`;
};
