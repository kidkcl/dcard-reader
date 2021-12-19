import request from 'supertest';
import axios from 'axios';

import app from '../src/app';

jest.mock('axios');

const mockDataJson = {
  data: [
    {
      id: 237638313,
      title: '當男人結婚時',
      excerpt: '',
      anonymousSchool: false,
      anonymousDepartment: false,
      pinned: false,
      forumId: 'bede7d5f-f946-4bd4-81bc-f4113faf9599',
      replyId: null,
      createdAt: '2021-12-10T03:50:11.478Z',
      updatedAt: '2021-12-10T03:50:11.478Z',
      commentCount: 42,
      likeCount: 3704,
      withNickname: true,
      tags: [],
      topics: [
        '梗圖',
        '迷因',
        '時事',
        '感情',
        '愛情',
      ],
      meta: {
        layout: 'image',
        isModerator: true,
      },
      globalPinned: null,
      forumName: '個人看板',
      forumAlias: 'persona_drymao',
      nsfw: false,
      gender: 'M',
      school: '獅子王辛巴',
      department: 'drymao',
      replyTitle: null,
      mediaMeta: [
        {
          id: 'd1c36c8f-03d1-4ca7-a214-363539ea16f3',
          url: 'https://megapx-assets.dcard.tw/images/776164b6-3b69-423b-bcf7-8ce2e90637e2/1280.jpeg',
          normalizedUrl: 'https://megapx.dcard.tw/v1/images/776164b6-3b69-423b-bcf7-8ce2e90637e2',
          thumbnail: 'https://megapx-assets.dcard.tw/images/776164b6-3b69-423b-bcf7-8ce2e90637e2/160.jpeg',
          type: 'image/megapx',
          tags: [],
          createdAt: '2021-12-10T03:50:11.478Z',
          updatedAt: '2021-12-10T03:50:11.478Z',
          width: 750,
          height: 1199,
          croppingWindow: {
            anchorX: 0,
            anchorY: 150,
            width: 750,
            height: 450,
          },
        },
      ],
      reactions: [
        {
          id: '286f599c-f86a-4932-82f0-f5a06f1eca03',
          count: 3518,
        },
        {
          id: 'e8e6bc5d-41b0-4129-b134-97507523d7ff',
          count: 150,
        },
        {
          id: '514c2569-fd53-4d9d-a415-bf0f88e7329f',
          count: 29,
        },
        {
          id: '4b018f48-e184-445f-adf1-fc8e04ba09b9',
          count: 5,
        },
        {
          id: '011ead16-9b83-4729-9fde-c588920c6c2d',
          count: 1,
        },
        {
          id: 'aa0d425f-d530-4478-9a77-fe3aedc79eea',
          count: 1,
        },
      ],
      isPersonaPagePost: true,
      hidden: false,
      customStyle: null,
      isSuspiciousAccount: false,
      isModerator: true,
      layout: 'image',
      spoilerAlert: false,
      isSelectedPost: false,
      leaderboardCategoryId: '29554c5d-229e-4439-a757-74c31ca8e6e7',
      leaderboardCategoryName: '有趣',
      enableNestedComment: true,
      totalCommentCount: 76,
      canAppearOnPopularList: true,
      withImages: true,
      withVideos: false,
      media: [],
      reportReasonText: '',
      supportedReactions: null,
      excerptComments: [],
      edited: false,
      postAvatar: 'https://megapx-assets.dcard.tw/images/16902029-b6a1-42ab-a51e-a64e9af0f54f/full.jpeg',
      activityAvatar: '',
      verifiedBadge: false,
      memberType: '',
    },
  ],
};

describe('app', () => {
  it('GETs /api/data and should obtain mocked response', async () => {
    expect.assertions(1);
    axios.get.mockResolvedValue(mockDataJson);
    const res = await request(app)
      .get('/api/data')
      .expect(200);
    expect(res.body).toEqual(mockDataJson.data);
  });
});
