import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '1b2'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0d5'),
    routes: [
      {
        path: '/docs/blockchain/2021.03.07.blockchain_issues',
        component: ComponentCreator('/docs/blockchain/2021.03.07.blockchain_issues', '062'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/broker/2020.11.11.what_is_broker',
        component: ComponentCreator('/docs/broker/2020.11.11.what_is_broker', '735'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/broker/2021.07.12.mqtt5_vs_3',
        component: ComponentCreator('/docs/broker/2021.07.12.mqtt5_vs_3', 'd1c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/database/2021.04.18.smalltalk_nosql',
        component: ComponentCreator('/docs/database/2021.04.18.smalltalk_nosql', 'c5e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/database/2022.09.23.how_pick_database',
        component: ComponentCreator('/docs/database/2022.09.23.how_pick_database', '37f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/golang/2020.12.06.go_mod_tutorial',
        component: ComponentCreator('/docs/golang/2020.12.06.go_mod_tutorial', '4e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/golang/2021.02.21.goroutine_tutorial',
        component: ComponentCreator('/docs/golang/2021.02.21.goroutine_tutorial', '4cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/golang/2021.10.23.advance_golang',
        component: ComponentCreator('/docs/golang/2021.10.23.advance_golang', 'd36'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/golang/2023.06.26.let_goroutine_debug_easy',
        component: ComponentCreator('/docs/golang/2023.06.26.let_goroutine_debug_easy', '382'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/http/2020.11.25.overview_the_websocket_mechanism',
        component: ComponentCreator('/docs/http/2020.11.25.overview_the_websocket_mechanism', '462'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/k8s/2022.02.14.shorttalk_k8s',
        component: ComponentCreator('/docs/k8s/2022.02.14.shorttalk_k8s', '6fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/k8s/2022.02.19.k8s_structure',
        component: ComponentCreator('/docs/k8s/2022.02.19.k8s_structure', '923'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/k8s/2022.03.20.k8s.devops',
        component: ComponentCreator('/docs/k8s/2022.03.20.k8s.devops', 'bc8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/k8s/2022.04.30.distribution_forces',
        component: ComponentCreator('/docs/k8s/2022.04.30.distribution_forces', '745'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/k8s/2023.09.17.raspberry_pi_with_k3d',
        component: ComponentCreator('/docs/k8s/2023.09.17.raspberry_pi_with_k3d', 'ad5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/patterns/09.24.introduce_vvl',
        component: ComponentCreator('/docs/patterns/09.24.introduce_vvl', 'c96'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/patterns/2021.09.04.from_mod_to_structure',
        component: ComponentCreator('/docs/patterns/2021.09.04.from_mod_to_structure', 'ef7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/patterns/2021.12.31.cqrs',
        component: ComponentCreator('/docs/patterns/2021.12.31.cqrs', 'a94'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/patterns/2022.06.17.how_microservice_data_store',
        component: ComponentCreator('/docs/patterns/2022.06.17.how_microservice_data_store', 'e7b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/patterns/2022.11.16.ambassador_pattern',
        component: ComponentCreator('/docs/patterns/2022.11.16.ambassador_pattern', 'b93'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/security/2020.12.20.auth_2_tutorial',
        component: ComponentCreator('/docs/security/2020.12.20.auth_2_tutorial', '081'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/security/2021.05.01.different_from_bearer_and_basic_token',
        component: ComponentCreator('/docs/security/2021.05.01.different_from_bearer_and_basic_token', '560'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/torch/2020.11.04.torch_server_tutorial',
        component: ComponentCreator('/docs/torch/2020.11.04.torch_server_tutorial', 'cfb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/web_rtc/2020.11.19.apprtc_tutorial',
        component: ComponentCreator('/docs/web_rtc/2020.11.19.apprtc_tutorial', '109'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a13'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
