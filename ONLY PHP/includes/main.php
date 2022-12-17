<div class="container-fluid">
    <div class="row">
        <?php foreach ($arrDiscs as $element): ?>
        <div class="col-2">
            <div class="card" style="width: 9rem">
                <img src=<?= $element["image"] ?> />
                <div class="card-body">
                    <h5 class="card-title">
                        <?= $element["title"] ?>
                    </h5>
                    <p class="card-text">
                        <?= $element["author"] ?>
                    </p>
                    <p class="card-text">
                        <?= $element["year"] ?>
                    </p>
                </div>
            </div>
        </div>
        <?php endforeach ?>
    </div>
</div>