import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Tutorial sidebar
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // BDR sidebar
  bdrSidebar: [
    {
      type: 'category',
      label: 'Business Development',
      items: [
        'intro',
        'market-analysis-2024',
        'quarterly-objectives',
      ],
    },
  ],

  // RFX sidebar
  rfxSidebar: [
    {
      type: 'category',
      label: 'RFX Documentation',
      items: [
        'intro',
        'learning-notes',
        'personal-growth-journey',
      ],
    },
  ],

  // TDY sidebar
  tdySidebar: [
    {
      type: 'category',
      label: 'Today\'s Documentation',
      items: [
        'intro',
        'daily-planning',
        'meeting-notes',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
