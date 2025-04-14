<?php
$reviewsFile = 'reviews.txt';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = htmlspecialchars(trim($_POST['name']));
  $review = htmlspecialchars(trim($_POST['review']));

  if ($name && $review) {
    $entry = date("Y-m-d H:i") . " | " . $name . ": " . $review . PHP_EOL;
    file_put_contents($reviewsFile, $entry, FILE_APPEND);
  }
}

$reviews = file_exists($reviewsFile) ? file($reviewsFile) : [];
?>

<h2>Leave a Review</h2>
<form method="post">
  <p><input type="text" name="name" placeholder="Your name" required></p>
  <p><textarea name="review" placeholder="Your review..." required></textarea></p>
  <p><button type="submit">Submit</button></p>
</form>

<h3>Previous Reviews</h3>
<div class="reviews">
  <?php foreach (array_reverse($reviews) as $line): ?>
    <div class="review"><?= nl2br(htmlspecialchars($line)) ?></div>
  <?php endforeach; ?>
</div>

<a href="index.php"> Back on main page</a>
