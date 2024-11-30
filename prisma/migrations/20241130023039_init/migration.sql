-- CreateTable
CREATE TABLE "infshop" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "describe" TEXT,
    "timework" TEXT,
    "img" TEXT,

    CONSTRAINT "infshop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "soicial" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "link" TEXT,
    "img" TEXT,

    CONSTRAINT "soicial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "img" TEXT,
    "content" TEXT,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marketing_shop" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "link" TEXT,
    "describe" TEXT,
    "img" TEXT,
    "active" INTEGER NOT NULL,

    CONSTRAINT "marketing_shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marketing" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "describe" TEXT,
    "img" TEXT,
    "active" INTEGER NOT NULL,

    CONSTRAINT "marketing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marketing_product" (
    "id" SERIAL NOT NULL,
    "productid" INTEGER NOT NULL,
    "marketingid" INTEGER NOT NULL,

    CONSTRAINT "marketing_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "price" TEXT,
    "img" TEXT[],
    "describe" TEXT,
    "content" TEXT,
    "sale" INTEGER NOT NULL,
    "view" INTEGER NOT NULL,
    "discount" TEXT,
    "active" INTEGER NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category_product" (
    "id" SERIAL NOT NULL,
    "categoryid" INTEGER NOT NULL,
    "productid" INTEGER NOT NULL,

    CONSTRAINT "category_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classfy" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "quantity" TEXT,
    "img" TEXT,
    "productid" INTEGER NOT NULL,

    CONSTRAINT "classfy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review" (
    "id" SERIAL NOT NULL,
    "content" TEXT,
    "productid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "time" TEXT,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_product" (
    "id" SERIAL NOT NULL,
    "productid" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "classfyid" INTEGER NOT NULL,
    "orderid" INTEGER NOT NULL,

    CONSTRAINT "order_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coupon_product" (
    "id" SERIAL NOT NULL,
    "productid" INTEGER NOT NULL,
    "couponid" INTEGER NOT NULL,

    CONSTRAINT "coupon_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productlike" (
    "id" SERIAL NOT NULL,
    "productid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "productlike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_product" (
    "id" SERIAL NOT NULL,
    "productid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "classfyid" INTEGER NOT NULL,

    CONSTRAINT "user_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "img" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "pass" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role_user" (
    "id" SERIAL NOT NULL,
    "roleid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "role_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "position" TEXT,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "describe" TEXT,
    "img" TEXT,
    "content" TEXT,
    "time" TEXT,

    CONSTRAINT "blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT,
    "time" TEXT,
    "userid" INTEGER NOT NULL,
    "blogid" INTEGER NOT NULL,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "address" TEXT,
    "time" TEXT,
    "active" INTEGER NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "typer_user" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "typerid" INTEGER NOT NULL,

    CONSTRAINT "typer_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_coupon" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "couponid" INTEGER NOT NULL,

    CONSTRAINT "user_coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address_order" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "active" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "address_order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag_blog" (
    "id" SERIAL NOT NULL,
    "blogid" INTEGER NOT NULL,
    "tagid" INTEGER NOT NULL,

    CONSTRAINT "tag_blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category_coupon" (
    "id" SERIAL NOT NULL,
    "categoryid" INTEGER NOT NULL,
    "couponid" INTEGER NOT NULL,

    CONSTRAINT "category_coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "typer" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "typer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "subject" TEXT,
    "name" TEXT,
    "message" TEXT,
    "email" TEXT,
    "phone" TEXT,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coupon" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "discountpercent" TEXT,
    "discountprice" TEXT,
    "quantity" INTEGER NOT NULL,
    "active" INTEGER NOT NULL,
    "buymin" TEXT NOT NULL,

    CONSTRAINT "coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_coupon" (
    "id" SERIAL NOT NULL,
    "couponid" INTEGER NOT NULL,
    "orderid" INTEGER NOT NULL,

    CONSTRAINT "order_coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "typer_coupon" (
    "id" SERIAL NOT NULL,
    "couponid" INTEGER NOT NULL,
    "typerid" INTEGER NOT NULL,

    CONSTRAINT "typer_coupon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "marketing_product" ADD CONSTRAINT "marketing_product_productid_fkey" FOREIGN KEY ("productid") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marketing_product" ADD CONSTRAINT "marketing_product_marketingid_fkey" FOREIGN KEY ("marketingid") REFERENCES "marketing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_product" ADD CONSTRAINT "category_product_categoryid_fkey" FOREIGN KEY ("categoryid") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_product" ADD CONSTRAINT "category_product_productid_fkey" FOREIGN KEY ("productid") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classfy" ADD CONSTRAINT "classfy_productid_fkey" FOREIGN KEY ("productid") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_productid_fkey" FOREIGN KEY ("productid") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_product" ADD CONSTRAINT "order_product_productid_fkey" FOREIGN KEY ("productid") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_product" ADD CONSTRAINT "order_product_classfyid_fkey" FOREIGN KEY ("classfyid") REFERENCES "classfy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_product" ADD CONSTRAINT "order_product_orderid_fkey" FOREIGN KEY ("orderid") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coupon_product" ADD CONSTRAINT "coupon_product_productid_fkey" FOREIGN KEY ("productid") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coupon_product" ADD CONSTRAINT "coupon_product_couponid_fkey" FOREIGN KEY ("couponid") REFERENCES "coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productlike" ADD CONSTRAINT "productlike_productid_fkey" FOREIGN KEY ("productid") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productlike" ADD CONSTRAINT "productlike_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_product" ADD CONSTRAINT "user_product_productid_fkey" FOREIGN KEY ("productid") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_product" ADD CONSTRAINT "user_product_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_product" ADD CONSTRAINT "user_product_classfyid_fkey" FOREIGN KEY ("classfyid") REFERENCES "classfy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_user" ADD CONSTRAINT "role_user_roleid_fkey" FOREIGN KEY ("roleid") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_user" ADD CONSTRAINT "role_user_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_blogid_fkey" FOREIGN KEY ("blogid") REFERENCES "blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "typer_user" ADD CONSTRAINT "typer_user_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "typer_user" ADD CONSTRAINT "typer_user_typerid_fkey" FOREIGN KEY ("typerid") REFERENCES "typer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_coupon" ADD CONSTRAINT "user_coupon_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_coupon" ADD CONSTRAINT "user_coupon_couponid_fkey" FOREIGN KEY ("couponid") REFERENCES "coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address_order" ADD CONSTRAINT "address_order_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag_blog" ADD CONSTRAINT "tag_blog_blogid_fkey" FOREIGN KEY ("blogid") REFERENCES "blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag_blog" ADD CONSTRAINT "tag_blog_tagid_fkey" FOREIGN KEY ("tagid") REFERENCES "tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_coupon" ADD CONSTRAINT "category_coupon_categoryid_fkey" FOREIGN KEY ("categoryid") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_coupon" ADD CONSTRAINT "category_coupon_couponid_fkey" FOREIGN KEY ("couponid") REFERENCES "coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_coupon" ADD CONSTRAINT "order_coupon_couponid_fkey" FOREIGN KEY ("couponid") REFERENCES "coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_coupon" ADD CONSTRAINT "order_coupon_orderid_fkey" FOREIGN KEY ("orderid") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "typer_coupon" ADD CONSTRAINT "typer_coupon_couponid_fkey" FOREIGN KEY ("couponid") REFERENCES "coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "typer_coupon" ADD CONSTRAINT "typer_coupon_typerid_fkey" FOREIGN KEY ("typerid") REFERENCES "typer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
