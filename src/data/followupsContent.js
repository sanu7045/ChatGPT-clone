export const followUpContent = {
  // --- BRAINSTORM ---
  "Brainstorm a name for my coffee shop": {
    "Can you suggest names with a 'vintage' vibe?": "A vintage coffee shop name should evoke nostalgia and timeless comfort. Think of names like 'The Gilded Bean,' 'Old World Roastery,' or 'Heritage Brew.' These titles suggest a space filled with reclaimed wood, antique espresso machines, and a slow-paced atmosphere where history is respected. Using words like 'Hearth,' 'Apothecary,' or 'Foundry' connects the brand to traditional craftsmanship, making customers feel like they are stepping into a well-loved neighborhood secret that has stood the test of time.",
    },
  "Ideas for a 5-year-old's birthday": {
    "What are some low-budget indoor activities?": "Low-budget indoor fun relies on imagination rather than expensive rentals. You can host 'Musical Statues' using a smartphone playlist, set up a DIY bubble station with dish soap, or create a 'Floor is Lava' obstacle course using sofa cushions and painter's tape. Another great idea is a 'Cardboard Box City' where kids can color and decorate large appliance boxes. These activities keep energy levels high and encourage social interaction, proving that the best birthday memories are often made with simple household items and creative play.",
     },

  // --- CODE ---
  "Explain how a React Hook works": {
    "What is the difference between useMemo and useCallback?": "The core difference is what they actually cache in memory. useMemo executes a function and stores the *result* (a value like an object or array), while useCallback stores the *function definition* itself. You should use useMemo to avoid expensive recalculations on every render, whereas useCallback is primarily used to maintain referential equality for functions passed as props to optimized child components (using React.memo), preventing those children from re-rendering unnecessarily when the parent state changes.",
    },
  "Write a Python script to scrape a site": {
    "How do I handle pagination while scraping?": "Handling pagination requires finding the pattern in the site's 'Next' button URL or its query parameters (like '?page=2'). In your Python script, you typically wrap your scraping logic in a 'while' loop or a 'for' loop. You extract the link to the next page, check if it exists, and then use your request library to fetch that new URL. To be safe, always include a slight delay (using time.sleep) between page requests so you don't overwhelm the server and trigger an automatic IP ban.",
    },

  // --- SUMMARIZE ---
  "Summarize this long article": {
    "Can you explain the main conclusion in one sentence?": "A one-sentence conclusion distills the author's primary objective into its most potent form. It ignores supporting evidence and secondary arguments to focus solely on the 'bottom line' or the final verdict of the piece. This is essential for high-level decision-makers who need to grasp the 'so what?' of a document instantly. By stripping away the fluff, this single sentence serves as the North Star for the entire article, providing clarity on exactly what the reader is supposed to take away after finishing the text.",
    },

  // --- ADVICE ---
  "Career advice for a junior dev": {
    "What projects should I prioritize for my portfolio?": "As a junior dev, your portfolio should showcase 'Real-World Utility' rather than just tutorials. Prioritize one high-quality Full-Stack application (like a Task Manager or E-commerce MVP) that demonstrates your ability to connect a frontend to a database. Include a project that uses a third-party API and emphasize clean, well-documented code on GitHub. Quality always beats quantity; a single project with a comprehensive README and a 'Challenges Solved' section is far more impressive to a recruiter than ten 'To-Do' list clones.",
    },

  // --- DATA ---
  "Find trends in this data": {
    "Are there any seasonal patterns visible in this dataset?": "Seasonal patterns refer to recurring fluctuations that happen at specific times of the year, such as a spike in retail sales every December or increased travel in the summer. Identifying these is crucial for resource planning and inventory management. By comparing year-over-year data for the same month, you can distinguish between true growth and a predictable seasonal 'bump.' This allows businesses to stop reacting to every change and start anticipating them, ensuring they are never understaffed or overstocked during peak periods.",
     },

  // --- IMAGES ---
  "Describe what is in this image": {
    "Can you identify the artistic style used in this image?": "Identifying the artistic style involves looking at brushwork, lighting, and the level of realism. For instance, 'Impressionism' is characterized by visible strokes and an emphasis on light, while 'Minimalism' focuses on clean lines and negative space. Analyzing these elements helps us understand the creator's intent—whether they wanted to evoke a specific emotion, capture a moment in time, or challenge the viewer's perception of reality. Style identification is a key step in placing an image within a historical or cultural context.",
    },

  // --- PLAN ---
  "Workout plan for a busy week": {
    "Can you suggest a 15-minute high-intensity (HIIT) routine?": "A 15-minute HIIT session is perfect for a busy day because it burns a high amount of calories in a short window. You can follow a '40/20' structure: 40 seconds of maximum effort followed by 20 seconds of rest. Exercises like Burpees, Mountain Climbers, Air Squats, and High Knees are ideal because they require no equipment and hit multiple muscle groups at once. The goal is to keep your heart rate in the 'red zone,' which triggers an 'afterburn effect' where your body continues to burn calories long after the workout is over.",
    },

  // --- SURPRISE ---
  "Tell me a mystery fact": {
    "Is there a scientific explanation for this mystery?": "Many historical 'mysteries' were eventually debunked by modern technology. For example, the 'Sailing Stones' of Death Valley, which seemed to move on their own, were discovered to be pushed by thin sheets of ice during rare winter storms. Scientific inquiry doesn't ruin the mystery; it highlights the incredible complexity of the natural world. By using tools like carbon dating, DNA sequencing, and satellite imagery, we can solve puzzles that stumped our ancestors, proving that the truth is often even more fascinating than the myths we created to explain them.",
    },

  // --- DEFAULT ---
  "default": {
    "Can you explain this in more detail?": "A detailed explanation involves looking at the 'Nuance'—the small details that change the entire meaning of a concept. We move past the 'What' and focus heavily on the 'How' and the 'Why.' This is essential for deep learning, as it allows you to see the connections between this topic and other fields. By examining edge cases and historical context, you gain a 360-degree view that transforms a basic fact into useful, applicable knowledge that you can use to solve real-world problems more effectively.",
   }
};
