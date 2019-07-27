require('dotenv').config()

module.exports = {
    // API Access Keys

    AIRTABLE: {
        API_KEY: process.env.AIRTABLE_API_KEY,
        BASE_ID: process.env.AIRTABLE_BASE_ID
    },
    GITHUB: {
        CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET
    },
    STRIPE: {
        PUBLIC_KEY_LIVE: process.env.STRIPE_PUBLIC_KEY_LIVE,
        PUBLIC_KEY_TEST: process.env.STRIPE_PUBLIC_KEY_TEST,
        SECRET_KEY_LIVE: process.env.STRIPE_SECRET_KEY_LIVE,
        SECRET_KEY_TEST: process.env.STRIPE_SECRET_KEY_TEST
    },
    PORTS: {
        ALICE: '11008',
        BOB: '11009'
    },
    MACAROONS: {
        ALICE: 'AgEDbG5kAs8BAwoQOZtSrnqJNx/5FQDAD8uGmBIBMBoWCgdhZGRyZXNzEgRyZWFkEgV3cml0ZRoTCgRpbmZvEgRyZWFkEgV3cml0ZRoXCghpbnZvaWNlcxIEcmVhZBIFd3JpdGUaFgoHbWVzc2FnZRIEcmVhZBIFd3JpdGUaFwoIb2ZmY2hhaW4SBHJlYWQSBXdyaXRlGhYKB29uY2hhaW4SBHJlYWQSBXdyaXRlGhQKBXBlZXJzEgRyZWFkEgV3cml0ZRoSCgZzaWduZXISCGdlbmVyYXRlAAAGIM52rJzL3JD4JgX9vWYsnFDylzyY2DPaaTt33A1LM+Sc',
        BOB: 'AgEDbG5kAs8BAwoQjVex5/zCTKSEy2VmoePUOBIBMBoWCgdhZGRyZXNzEgRyZWFkEgV3cml0ZRoTCgRpbmZvEgRyZWFkEgV3cml0ZRoXCghpbnZvaWNlcxIEcmVhZBIFd3JpdGUaFgoHbWVzc2FnZRIEcmVhZBIFd3JpdGUaFwoIb2ZmY2hhaW4SBHJlYWQSBXdyaXRlGhYKB29uY2hhaW4SBHJlYWQSBXdyaXRlGhQKBXBlZXJzEgRyZWFkEgV3cml0ZRoSCgZzaWduZXISCGdlbmVyYXRlAAAGIEBa7k90eGQL+CU4HgZJE/m3z0V9PZuAlD6GvO6ntaSD'
    },
    TLS_CERTS: {
        ALICE: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUNjVENDQWhlZ0F3SUJBZ0lRTXRvZk1uUEozOEhrdTdDUEYyVENtREFLQmdncWhrak9QUVFEQWpBL01SOHcKSFFZRFZRUUtFeFpzYm1RZ1lYVjBiMmRsYm1WeVlYUmxaQ0JqWlhKME1Sd3dHZ1lEVlFRREV4Tk5ZV05DYjI5cgpMVkJ5YnkweUxteHZZMkZzTUI0WERURTVNRFF3TmpBNU5URXlNbG9YRFRJd01EVXpNVEE1TlRFeU1sb3dQekVmCk1CMEdBMVVFQ2hNV2JHNWtJR0YxZEc5blpXNWxjbUYwWldRZ1kyVnlkREVjTUJvR0ExVUVBeE1UVFdGalFtOXYKYXkxUWNtOHRNaTVzYjJOaGJEQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJEdEQ4Rk9yQ1JiRgpFd1l5SU9tcTBDNm9yZmpCbktGREIxTTVmM1VXeS9meHRWdXB1N2JYL1c3T3JVUnh3cnRVOTBvSTE4WFA2ZzVFCjRXbkZLZEVFYVlDamdmUXdnZkV3RGdZRFZSMFBBUUgvQkFRREFnS2tNQThHQTFVZEV3RUIvd1FGTUFNQkFmOHcKZ2MwR0ExVWRFUVNCeFRDQndvSVRUV0ZqUW05dmF5MVFjbTh0TWk1c2IyTmhiSUlKYkc5allXeG9iM04wZ2dSMQpibWw0Z2dwMWJtbDRjR0ZqYTJWMGh3Ui9BQUFCaHhBQUFBQUFBQUFBQUFBQUFBQUFBQUFCaHhEK2dBQUFBQUFBCkFBQUFBQUFBQUFBQmh4RCtnQUFBQUFBQUFBQ2FZbGFJc0M2NGh3UUtBRGNoaHhEK2dBQUFBQUFBQVB6Mjl2LysKQk9MVWh4RCtnQUFBQUFBQUFEa2crTjdvazJLbGh4RCtnQUFBQUFBQUFPbzc5N2tFdDM2Wmh4RCtnQUFBQUFBQQpBQkJQT0dWcFNzd01od1NwL2oyUk1Bb0dDQ3FHU000OUJBTUNBMGdBTUVVQ0lEUkJzbmJvendvY21adXpmUm9yCkoxOGJzZUVvWHF6c1RTQTZGa2JzUnJBUkFpRUFyaEJyTFJKYXdmd0xkOWJETWVQZllwd1Y4SVpYM1V6cm1JZUYKN0ozLzBuVT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=',
        BOB: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUNjakNDQWhpZ0F3SUJBZ0lSQU9JR3FncElhZk03WXU1N2NuTk9HV013Q2dZSUtvWkl6ajBFQXdJd1B6RWYKTUIwR0ExVUVDaE1XYkc1a0lHRjFkRzluWlc1bGNtRjBaV1FnWTJWeWRERWNNQm9HQTFVRUF4TVRUV0ZqUW05dgpheTFRY204dE1pNXNiMk5oYkRBZUZ3MHhPVEEwTURZd09UVTRNVGxhRncweU1EQTFNekV3T1RVNE1UbGFNRDh4Ckh6QWRCZ05WQkFvVEZteHVaQ0JoZFhSdloyVnVaWEpoZEdWa0lHTmxjblF4SERBYUJnTlZCQU1URTAxaFkwSnYKYjJzdFVISnZMVEl1Ykc5allXd3dXVEFUQmdjcWhrak9QUUlCQmdncWhrak9QUU1CQndOQ0FBU0pDTStQbkFpbgp1NW9uTkY5NFNDYkhuZ0Vkc2NodjYyUUFMdk9ab0xrNSt1T2dtRGpOVVZ2NlJnSnZiQlM4TUY0TWYyNmFiUG94ClNKN1ZTUE9EVGFwWG80SDBNSUh4TUE0R0ExVWREd0VCL3dRRUF3SUNwREFQQmdOVkhSTUJBZjhFQlRBREFRSC8KTUlITkJnTlZIUkVFZ2NVd2djS0NFMDFoWTBKdmIyc3RVSEp2TFRJdWJHOWpZV3lDQ1d4dlkyRnNhRzl6ZElJRQpkVzVwZUlJS2RXNXBlSEJoWTJ0bGRJY0Vmd0FBQVljUUFBQUFBQUFBQUFBQUFBQUFBQUFBQVljUS9vQUFBQUFBCkFBQUFBQUFBQUFBQUFZY1Evb0FBQUFBQUFBQUFtbUpXaUxBdXVJY0VDZ0EzSVljUS9vQUFBQUFBQUFEODl2Yi8KL2dUaTFJY1Evb0FBQUFBQUFBQTVJUGplNkpOaXBZY1Evb0FBQUFBQUFBRHFPL2U1QkxkK21ZY1Evb0FBQUFBQQpBQUFRVHpobGFVck1ESWNFcWY0OWtUQUtCZ2dxaGtqT1BRUURBZ05JQURCRkFpRUF1K0pJVE1RQWZXTzlCZVJICmt3bWtxblFRK3FNcVBJTWRTS0h1aDV1d2dZa0NJQVhIU2pLRWJEbGlGZkV0ellYSkZiK2RkSFZQOCtINFBPTWkKSkFCVEwzUHkKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo='
    }
};
