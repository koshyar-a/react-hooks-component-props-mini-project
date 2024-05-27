// Article.js
import React from 'react';

function Article({ title, date, preview }) {
  // Calculate minutes to read
  const minutes = Math.ceil(preview.split(' ').length / 200); // Assuming 200 words per minute

  // Generate emojis based on minutes to read
  let emojis = '☕️'.repeat(Math.ceil(minutes / 5));
  if (minutes >= 30) {
    emojis = '🍱'.repeat(Math.ceil(minutes / 10));
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <span>{emojis} {minutes} min read</span>
    </article>
  );
}

export default Article;
