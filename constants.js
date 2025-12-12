// (types removed)

export const PRODUCTS = [
  {
    id: '1',
    name: 'Salty Potato Chips',
    price: 3.50,
    category: 'Chips',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCZOmazozIhAfOCUfRP2s3dKFHSUOASWgdrZWjvml_swJutP_GnvJ4fyKC_ChVISCbZv533t93ciZgP6gWbicDPXhiejTKkwqtWMu1k48p0igMCJynGg-_beD0vFVnsS3YVsXeBCAIoDGyGsEbymDilEq9DNjJME0tyw8xXXmxOnnQjyOYXx_KG1yG4LmVxoeTffglqd_exPX8mMIAVTKmldgAM0tvCrHqNH_9eR8gvKAupngeOiXzo3l7UZ_GhLtebnPZWkODopI',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCZOmazozIhAfOCUfRP2s3dKFHSUOASWgdrZWjvml_swJutP_GnvJ4fyKC_ChVISCbZv533t93ciZgP6gWbicDPXhiejTKkwqtWMu1k48p0igMCJynGg-_beD0vFVnsS3YVsXeBCAIoDGyGsEbymDilEq9DNjJME0tyw8xXXmxOnnQjyOYXx_KG1yG4LmVxoeTffglqd_exPX8mMIAVTKmldgAM0tvCrHqNH_9eR8gvKAupngeOiXzo3l7UZ_GhLtebnPZWkODopI'
    ],
    description: 'Classic salty potato chips made from the finest potatoes.',
    ingredients: 'Potatoes, Vegetable Oil, Salt.',
    rating: 4.5,
    reviews: 120
  },
  {
    id: '2',
    name: 'Classic Cola',
    price: 1.99,
    category: 'Drinks',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgvqVmg0MU_BlvKJP3UXQ9JYpOuP0T3vsoPzADfP5tTWEklPfred6CSFZEtERgjyZrmoO8NE4-Bp5QAnBdYAGrB7MfbUqxFZSB8yqBqBEdmc3HevmFtY_ljwX7KZ4waBQsdTBl0plpE03F2qfByZU9jopF5S0TbHKdEuy7lJ2WDawuV0Wc_KrbieQqnfhEycfWXlwpb18yL0V3m8uC_8zFVgb4uV9GfzYqV60u9kqMg1Y_X3wDtSiZyaaW0PbVeLXZOQwws6aufk8',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCgvqVmg0MU_BlvKJP3UXQ9JYpOuP0T3vsoPzADfP5tTWEklPfred6CSFZEtERgjyZrmoO8NE4-Bp5QAnBdYAGrB7MfbUqxFZSB8yqBqBEdmc3HevmFtY_ljwX7KZ4waBQsdTBl0plpE03F2qfByZU9jopF5S0TbHKdEuy7lJ2WDawuV0Wc_KrbieQqnfhEycfWXlwpb18yL0V3m8uC_8zFVgb4uV9GfzYqV60u9kqMg1Y_X3wDtSiZyaaW0PbVeLXZOQwws6aufk8'],
    description: 'Refreshing classic cola taste.',
    ingredients: 'Carbonated Water, Sugar, Caramel Color, Phosphoric Acid, Natural Flavors, Caffeine.',
    rating: 4.8,
    reviews: 340
  },
  {
    id: '3',
    name: 'Chocolate Cookies',
    price: 4.25,
    category: 'Cookies',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3pPVm8dOJh6ehYD3TEPkX8UfG0L9KboIsWDa_Jcb8CvsyF2Q5iYlDepH9RDnEVuXLzGSHKWTQCkpEadLANwGKiiLwXGCY8kgHhZmB3OTUy3nlJ3xsoMYRSBsAC25JH1OW02kvbjV_Cvj65Zrs8ypBJNmTj_n9oTDPhO9LRK3TwdXW-SUdhtSywVk_UrWOPxCeD_s3zeVm7DyISO8LGeNM6I2NLwJ5Gikutz6rwg7rfakyTrmgswinmceb7QXDPrCLThgMCxt5g1w',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuD3pPVm8dOJh6ehYD3TEPkX8UfG0L9KboIsWDa_Jcb8CvsyF2Q5iYlDepH9RDnEVuXLzGSHKWTQCkpEadLANwGKiiLwXGCY8kgHhZmB3OTUy3nlJ3xsoMYRSBsAC25JH1OW02kvbjV_Cvj65Zrs8ypBJNmTj_n9oTDPhO9LRK3TwdXW-SUdhtSywVk_UrWOPxCeD_s3zeVm7DyISO8LGeNM6I2NLwJ5Gikutz6rwg7rfakyTrmgswinmceb7QXDPrCLThgMCxt5g1w'],
    description: 'Rich chocolate chip cookies.',
    ingredients: 'Flour, Sugar, Butter, Chocolate Chips, Eggs, Vanilla Extract.',
    rating: 4.7,
    reviews: 210
  },
  {
    id: '4',
    name: 'Gummy Bears',
    price: 2.75,
    category: 'Candy',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIyPuXgrq5WRRZLCEvpnfZruSWtGSK6gruyjVqlhaOsZurlB8yHaplZfwvM6nrYJzHFknKsmwOHhY2J8DQJ0NmGQQBoJliTeGdZsgltTYRyJDP5ZRwbDWIN5aPCObhaE5hXP_qYss14U3BtvqiYNEddRU49oR1NyMHEqP5CAUKsVlCOMIiG-JgeMkXVdj7KdKG1oWtDNVGjph2LUiyjWD_FhI1ge7pfAwqiCRh4fvX5RaJGuqlBon9aGQMRBUtDn11lnH84UQhvcY',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBIyPuXgrq5WRRZLCEvpnfZruSWtGSK6gruyjVqlhaOsZurlB8yHaplZfwvM6nrYJzHFknKsmwOHhY2J8DQJ0NmGQQBoJliTeGdZsgltTYRyJDP5ZRwbDWIN5aPCObhaE5hXP_qYss14U3BtvqiYNEddRU49oR1NyMHEqP5CAUKsVlCOMIiG-JgeMkXVdj7KdKG1oWtDNVGjph2LUiyjWD_FhI1ge7pfAwqiCRh4fvX5RaJGuqlBon9aGQMRBUtDn11lnH84UQhvcY'],
    description: 'Colorful and chewy gummy bears.',
    ingredients: 'Glucose Syrup, Sugar, Gelatin, Dextrose, Fruit Juice.',
    rating: 4.6,
    reviews: 150
  },
  {
    id: '5',
    name: 'Cheesy Popcorn',
    price: 3.99,
    category: 'Chips',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMmUXYqSwuhkpQ1ZmNF3HYMiDgn74qcnRChPkhMScmXIiXE205HWhdRA5zqTCaQDxP1c-ocZopIgk_dsIVvr8SJt0Rw9YQRvbmbW2I7Aau6LfpuOrE8nu1uuR-CnHbe3r4ioRlFIbBbsy3EjgTDKNF8odrtxiy_VshsLqjPsLTUtrGILpo7tib-Z8usyxe7GZJzIBCm8djFqcavmBK95ShuG9UyFu5D-iejLz4aHIrwy0FKgBcge6WDXlXyWOklZDbZGJISHQgh18',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCMmUXYqSwuhkpQ1ZmNF3HYMiDgn74qcnRChPkhMScmXIiXE205HWhdRA5zqTCaQDxP1c-ocZopIgk_dsIVvr8SJt0Rw9YQRvbmbW2I7Aau6LfpuOrE8nu1uuR-CnHbe3r4ioRlFIbBbsy3EjgTDKNF8odrtxiy_VshsLqjPsLTUtrGILpo7tib-Z8usyxe7GZJzIBCm8djFqcavmBK95ShuG9UyFu5D-iejLz4aHIrwy0FKgBcge6WDXlXyWOklZDbZGJISHQgh18'],
    description: 'Cheesy gourmet popcorn.',
    ingredients: 'Popcorn, Vegetable Oil, Cheddar Cheese Powder, Salt.',
    rating: 4.4,
    reviews: 90
  },
  {
    id: '6',
    name: 'Fudge Brownie',
    price: 3.00,
    category: 'Cookies',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJg5rkntYOGODvgGvSg5YT4L4yiap8zZH-DGiB5pmbql7M5vyw3xsDrrEanxG-LhsTnrskC2STGIG8veW6vfIX8ZJryzRAEIsYJORo5qOzubNJ4eJh-m7jTR5IOn65SjNdbCOXobOkdBP9DcHyWLvGy0VSbrF3l6cfDjMi2ZTfJTtVT9I9GFENdcLtEDRRxUW4f_wRRenqJpSP0JClYh5d2I99CVsCBQG4AYXDHGJZl7M2HI0pbIy4RjnjjKYZQbbvr3pOTG426-0',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBJg5rkntYOGODvgGvSg5YT4L4yiap8zZH-DGiB5pmbql7M5vyw3xsDrrEanxG-LhsTnrskC2STGIG8veW6vfIX8ZJryzRAEIsYJORo5qOzubNJ4eJh-m7jTR5IOn65SjNdbCOXobOkdBP9DcHyWLvGy0VSbrF3l6cfDjMi2ZTfJTtVT9I9GFENdcLtEDRRxUW4f_wRRenqJpSP0JClYh5d2I99CVsCBQG4AYXDHGJZl7M2HI0pbIy4RjnjjKYZQbbvr3pOTG426-0'],
    description: 'Decadent fudge brownie.',
    ingredients: 'Sugar, Butter, Eggs, Cocoa Powder, Flour.',
    rating: 4.9,
    reviews: 300
  },
  {
    id: '7',
    name: 'Zesty Chili & Lime Fusion Chips',
    price: 3.99,
    category: 'Chips',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu8lhp7YIhYq4kZLh_alzj3GmeJzCNn_PX_XwOpcRsdktFUzQovLdCoiigAXG27d3GL7GpjQxuMdIafRcJLsey3Pa4KAd-0OGu7wx90_HU30b0s6WXAGRusLyDHk1qQPDwWPumhLVMTZ0vYgBc9aOj4SP8UES85NdCm0uDxO2UsUqmz0_5K5igyLoFS4UkxmoPj-l8V0alCOu4a8czgefWb6LyynotWD9vMWIk8CYP3QFtRt3SdurArxQuA4ABpDQxqhOBvaOeGNE',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCu8lhp7YIhYq4kZLh_alzj3GmeJzCNn_PX_XwOpcRsdktFUzQovLdCoiigAXG27d3GL7GpjQxuMdIafRcJLsey3Pa4KAd-0OGu7wx90_HU30b0s6WXAGRusLyDHk1qQPDwWPumhLVMTZ0vYgBc9aOj4SP8UES85NdCm0uDxO2UsUqmz0_5K5igyLoFS4UkxmoPj-l8V0alCOu4a8czgefWb6LyynotWD9vMWIk8CYP3QFtRt3SdurArxQuA4ABpDQxqhOBvaOeGNE',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTqHglnqImwnPJkUK2934Y2OCeZK_ByvcK3-8NDxyZq9bYfvpobBdAvd61Fec3HYAArrrKmTM-BC1Lxj0mCIR82yXbQyYpj5V0L9gDxpMoHyHVfvWIrsGasSqfQb7Vr73xuuX3jhrXL6BwnXTmdElbvZqUEFUnzFDTThO02Bi5uDLKRMFRNlfCcwzxeTPZkcYLbc0sZqI8QqKJBA3_3pMiKNNpxn00SFD2w0WlpbC1gHYStj0OvxnW3wB8K5G3QZ29bv27zE6GKiQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCy1XD3AuzsiTA2yilcioASbu4bPOmDqWmFpU8V2ALBFZcqmVl3wMyoxPMvJo35i9nMDeNWJKUH5MpZ-8Dt-UPH7xqZS3PDsUC0foWseiSgsT2D0PZN3naQEGlXaBL-RKO9dAkn40PdlfreI2pONw8sUgM5Is7BkPjZEUVWVDomCghHB37pxioMgm5a8IMVCa-wvgUC8BQj10SqQdfkEGO3eGoXqX0rffApqfMmrFKBnV2jT2QeOy5YmD99bRtzW-SQ1fUL_qpaU_4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPvzFhFqLdvQuLnjcmgQeiC7x8DkxeJCpvNGsRJMZ6g46Ls-e8Oed_Y7idgMqVC1jv-xfSjeQft3H9JVhpaBrFSuh13h5G_tnKFwrqsVSSN5IYLH83hvj_7TDSxoXiWVW1WPR1mvgpmwhRqD7TKomw39q52jTBnuYQ-Ev9pmTklskvuyOPbQqZQXKNMISSr3xhuXTd0cVy0jdC6tFBoxMU0yspXQWYP6JI2ztHi8pazIoXJ26NDCotciBI_fkskIBkcBeX_fXTwwc'
    ],
    description: 'Get ready for a flavor explosion! Our Zesty Chili & Lime chips are crafted from the finest potatoes, kettle-cooked to crispy perfection, and seasoned with a fiery blend of authentic chili peppers and a refreshing burst of zesty lime. Perfect for parties, movie nights, or whenever you need a delicious kick.',
    ingredients: 'Potatoes, Vegetable Oil, Salt, Chili Powder, Lime Juice Powder, Paprika, Spices, Natural Flavors.',
    rating: 4.8,
    reviews: 256
  }
];

export const CATEGORIES = ['All', 'Chips', 'Cookies', 'Candy', 'Drinks'];

export const ORDERS = [
  {
    id: '123456',
    date: 'Jan 15, 2024',
    status: 'Shipped',
    total: 99.99,
    items: 5
  },
  {
    id: '123332',
    date: 'Jan 10, 2024',
    status: 'Processing',
    total: 45.50,
    items: 2
  }
];
